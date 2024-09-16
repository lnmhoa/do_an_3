import { Button, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const RowStack = styled(Stack)({
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '10px 0px',
    alignItems: 'center',
});

function OrderInfoInCart(props) {
    const theme = useTheme();
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
                }}
            >
                Thông tin đơn hàng
            </Typography>
            <RowStack>
                <Typography variant="subtitle2" color="rgba(0, 0, 0, 0.6)">
                    Tổng tiền
                </Typography>
                <Typography variant="h6" fontWeight={400}>
                    10.000.000 &#8363;
                </Typography>
            </RowStack>
            <Divider orientation="horizontal" flexItem />
            <RowStack>
                <Typography variant="subtitle2" color="rgba(0, 0, 0, 0.6)">
                    Tổng khuyến mãi
                </Typography>
                <Typography variant="h6" fontWeight={400}>
                    3.000.000 &#8363;
                </Typography>
            </RowStack>
            <Divider orientation="horizontal" flexItem />
            <RowStack>
                <Typography variant="subtitle2" color="rgba(0, 0, 0, 0.6)">
                    Phí vận chuyển
                </Typography>
                <Typography variant="subtitle2">Miễn phí</Typography>
            </RowStack>
            <Divider orientation="horizontal" flexItem />
            <RowStack>
                <Typography variant="subtitle2" color="rgba(0, 0, 0, 0.6)">
                    Cần thanh toán
                </Typography>
                <Typography variant="h6" fontWeight={400} color={theme.palette.secondary.main}>
                    7.000.000 &#8363;
                </Typography>
            </RowStack>
            <Button variant="contained">Xác nhận đơn</Button>
        </Stack>
    );
}

export default OrderInfoInCart;
