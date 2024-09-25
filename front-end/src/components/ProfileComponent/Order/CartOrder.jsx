import { Box, Button, Card, CardContent, CardMedia, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { formatCurrencyVN } from '../../../utils/formatCurrencyVN';
import { useTheme } from '@emotion/react';

function CartOrder(props) {
    const { date, status, productName, quantity, price, ...others } = props;
    const theme = useTheme();
    return (
        <Box sx={{ maxWidth: '100%', margin: '0 auto' }}>
            <Card
                sx={{
                    display: 'block',
                    marginBottom: 2,
                    cursor: 'pointer',
                    '&:hover': { boxShadow: theme.boxShadow.hover },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '5px 10px',
                    }}
                >
                    <Stack flexDirection={'row'}>
                        <Typography variant="button" sx={{ padding: '0 15px' }}>
                            {date}
                        </Typography>
                    </Stack>

                    <Typography variant="button" sx={{ padding: '0 15px' }}>
                        {status}
                    </Typography>
                </Box>
                <Divider />

                <Box sx={{ display: 'block', marginBottom: 0 }}>
                    <Box sx={{ display: 'flex', marginBottom: 0 }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 100, margin: '0 15px' }}
                            image="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2020_11_12_637407989603991120_mba-2020-silver-1.png"
                            alt="Apple"
                        />

                        <CardContent>
                            <Typography variant="button">{productName}</Typography>
                            <Typography variant="caption" color="text.main" sx={{ display: 'block' }}>
                                Số lượng: {quantity}
                            </Typography>
                            <Typography variant="caption" color="text.main" sx={{ display: 'block' }}>
                                Giá: {formatCurrencyVN(price)}
                            </Typography>
                        </CardContent>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            padding: '0 10px 10px 10px',
                            // borderBottom: '1px solid black',
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{ padding: '0 15px', color: theme.palette.secondary.main, fontWeight: 500 }}
                        >
                            Thành tiền: {formatCurrencyVN(price * quantity)}
                        </Typography>
                    </Box>
                    <Divider />
                </Box>

                {/* OK */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px',
                    }}
                >
                    <Typography variant="caption" sx={{ padding: '0 15px' }}>
                        Bạn cần hỗ trợ? Liên hệ ngay với chúng tôi.
                    </Typography>
                    <Button
                        variant="contained"
                        size="medium"
                        color="error"
                        sx={{ margin: '0 15px', minWidth: '200px', height: '30px' }}
                    >
                        Mua lại
                    </Button>
                </Box>
            </Card>
        </Box>
    );
}

export default CartOrder;
