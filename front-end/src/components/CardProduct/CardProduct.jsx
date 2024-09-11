import { Box, Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@emotion/react';

function CardProduct(props) {
    const theme = useTheme();
    const { sale, imageSrc, soldCount, ProductName, ProductPrice, ...other } = props;
    return (
        <Box>
            <Card
                sx={{
                    width: 'fit-content',
                    m: '0 auto 10px',
                    p: '5px',
                    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    '&:hover': {
                        boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`,
                    },
                }}
            >
                <CardContent>
                    <img
                        src={imageSrc}
                        alt=""
                        style={{
                            width: '220px',
                            padding: '5px',
                            marginBottom: '15px',
                        }}
                    />
                    <Stack flexDirection={'row'} gap={'15px'}>
                        <Chip label="Trả góp 0%" />
                    </Stack>
                    {sale && (
                        <Typography
                            sx={{
                                textAlign: 'center',
                                margin: '10px 0',
                                padding: '2px 0px',
                                color: '#fff',
                                backgroundColor: '#ff0000',
                                width: '100%',
                                borderRadius: '25px',
                                fontSize: '12px',
                            }}
                        >
                            Đã bán {soldCount}/5 sản phẩm
                        </Typography>
                    )}
                    <Typography
                        sx={{
                            marginTop: '20px',
                            letterSpacing: 1.3,
                            opacity: 0.7,
                            lineHeight: 1,
                            textDecoration: 'line-through',
                        }}
                    >
                        10.000.000 &#8363;{' '}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            letterSpacing: 1.3,
                            color: '#ff0000',
                            lineHeight: 1.5,
                            fontWeight: 'bold',
                        }}
                    >
                        5.000.000 &#8363;{' '}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        sx={{
                            color: '#6b9752',
                            lineHeight: 1,
                        }}
                    >
                        Đã giảm 5.000.000 &#8363;{' '}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            margin: '10px 0',
                            lineHeight: 1,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '200px', // Điều chỉnh chiều rộng tối đa theo nhu cầu
                        }}
                    >
                        iPhone 15 Pro Maxxxxxxxxxxxxxxxxxxxxxx
                    </Typography>
                    <Stack flexDirection={'row'} justifyContent={'space-between'} mt={3}>
                        <Button
                            variant="outlined"
                            sx={{
                                height: 'fit-content',
                            }}
                            size="small"
                        >
                            Thêm vào giỏ
                        </Button>{' '}
                        <Button
                            variant="contained"
                            sx={{
                                height: 'fit-content',
                            }}
                            size="small"
                        >
                            Mua Ngay
                        </Button>{' '}
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
}

export default CardProduct;
