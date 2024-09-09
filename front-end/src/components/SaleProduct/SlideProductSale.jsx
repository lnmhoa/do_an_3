import { Box, Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@emotion/react';

const ProductCard = ({ imageSrc, soldCount, theme }) => (
    <Box>
        <Card
            sx={{
                width: 'fit-content',
                m: '0 auto',
                p: '5px',
            }}
        >
            <CardContent>
                <img
                    src={imageSrc}
                    alt=""
                    style={{
                        width: '220px',
                        padding: '5px',
                        borderRadius: '5px',
                    }}
                />
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
                <Stack flexDirection={'row'} alignItems={'center'} mt={3}>
                    <Stack
                        sx={{
                            flex: 1,
                            padding: '3px',
                        }}
                    >
                        <Typography
                            sx={{
                                letterSpacing: 1,
                                lineHeight: 1,
                            }}
                            variant="subtitle1"
                        >
                            3.000.000 VND
                        </Typography>
                        <Typography
                            sx={{
                                letterSpacing: 1,
                                lineHeight: 1,
                                textDecoration: 'line-through',
                            }}
                            variant="subtitle2"
                        >
                            2.000.000 VND
                        </Typography>
                    </Stack>
                    <Button
                        variant="contained"
                        sx={{
                            minWidth: '100px',
                            height: '40px',
                            ml: '3px',
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

function SlideProductSale(props) {
    const theme = useTheme();
    const products = Array(6).fill({
        imageSrc:
            'https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2024_3_4_638451444037915753_samsung-galaxy-a23-5g-dd.jpg',
        soldCount: 0,
    });
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    };
    return (
        <Box
            sx={{
                maxWidth: '1150px',
                margin: '10px auto ',
                minHeight: '150px',
            }}
        >
            <Slider {...settings}>
                {products.map((product, index) => (
                    <ProductCard theme={theme} key={index} imageSrc={product.imageSrc} soldCount={product.soldCount} />
                ))}
            </Slider>
        </Box>
    );
}

export default SlideProductSale;
