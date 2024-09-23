import { Button, Divider, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { formatCurrencyVN } from '../../utils/formatCurrencyVN';

const RowStack = styled(Stack)({
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '15px 0px',
    alignItems: 'center',
});

function OrderInfoInCart(props) {
    const theme = useTheme();
    
    const discountValue = useSelector((state) => state.product.discountValue);
    const productData = useSelector((state) => state.product.productData);

    const calculateTotalPrice = (products) => {
        return products.reduce((total, product) => {
            return total + product.priceSale * product.quantity;
        }, 0);
    };

    const totalPrice = calculateTotalPrice(productData);

    return (
        <Stack
            sx={{
                padding: '10px 10px 30px 10px',
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    fontWeight: '500',
                    color: theme.palette.primary.main,
                    textTransform: 'capitalize',
                }}
            >
                Thông tin đơn hàng
            </Typography>
            <RowStack>
                <Typography variant="subtitle1" color="rgba(0, 0, 0, 0.6)">
                    Tổng tiền
                </Typography>
                <Typography variant="h6" fontWeight={400}>
                    {formatCurrencyVN(totalPrice)}
                </Typography>
            </RowStack>
            <Divider orientation="horizontal" flexItem />
            <RowStack>
                <Typography variant="subtitle1" color="rgba(0, 0, 0, 0.6)">
                    Tổng khuyến mãi
                </Typography>
                <Typography variant="h6" fontWeight={400}>
                    {formatCurrencyVN(discountValue)}
                </Typography>
            </RowStack>
            <Divider orientation="horizontal" flexItem />
            <RowStack>
                <Typography variant="subtitle1" color="rgba(0, 0, 0, 0.6)">
                    Phí vận chuyển
                </Typography>
                <Typography variant="subtitle1">Miễn phí</Typography>
            </RowStack>
            <Divider orientation="horizontal" flexItem />
            <RowStack>
                <Typography variant="subtitle1" color="rgba(0, 0, 0, 0.6)">
                    Cần thanh toán
                </Typography>
                <Typography variant="h6" fontWeight={500} color={theme.palette.secondary.main}>
                    {formatCurrencyVN(totalPrice - discountValue)}
                </Typography>
            </RowStack>
            <Button variant="contained">Xác nhận đơn</Button>
        </Stack>
    );
}

export default OrderInfoInCart;
