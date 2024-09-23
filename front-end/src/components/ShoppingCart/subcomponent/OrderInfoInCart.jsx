import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';
import { formatCurrencyVN } from '../../../utils/formatCurrencyVN';
import { Button, Divider, Stack, Typography } from '@mui/material';

const RowStack = styled(Stack)({
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '15px 0px',
    alignItems: 'center',
});

function OrderInfoInCart(props) {
    const theme = useTheme();

    const productData = useSelector((state) => state.product.productData);
    const discountValue = useSelector((state) => state.product.discountValue);

    const calculateTotalPrice = (products) => {
        return products.reduce((total, product) => {
            return total + product.priceSale * product.quantity;
        }, 0);
    };

    const totalPrice = calculateTotalPrice(productData);

    return (
        <Stack
            sx={{
                padding: '10px 10px 40px 10px',
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
                <Typography variant="subtitle1" color={theme.text.primary.main}>
                    Tổng tiền
                </Typography>
                <Typography variant="h6" fontWeight={400}>
                    {formatCurrencyVN(totalPrice)}
                </Typography>
            </RowStack>

            <Divider orientation="horizontal" flexItem />

            <RowStack>
                <Typography variant="subtitle1" color={theme.text.primary.main}>
                    Tổng khuyến mãi
                </Typography>
                <Typography variant="h6" fontWeight={400}>
                    {formatCurrencyVN(discountValue)}
                </Typography>
            </RowStack>

            <Divider orientation="horizontal" flexItem />

            <RowStack>
                <Typography variant="subtitle1" color={theme.text.primary.main}>
                    Phí vận chuyển
                </Typography>
                <Typography variant="subtitle1">Miễn phí</Typography>
            </RowStack>

            <Divider orientation="horizontal" flexItem />

            <RowStack>
                <Typography variant="subtitle1" color={theme.text.primary.main}>
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
