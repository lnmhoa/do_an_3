import React from 'react';
import CardProduct from '../CardProduct/CardProduct';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import TabsSelling from './TabsSelling/TabsSelling';

function BestSellingProduct(props) {
    const theme = useTheme();
    const products = Array(6).fill({
        imageSrc: 'https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/iphone_15_pro_max_f589ed5358.png',
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
                maxWidth: '1200px',
                m: '30px auto',
                borderRadius: '10px',
                p: '10px 10px 10px 10px',
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: '600',
                    paddingLeft: '25px',
                    textTransform: 'uppercase',
                    color: theme.palette.primary.main,
                }}
            >
                Sản phẩm bán chạy
            </Typography>
            <TabsSelling />
            <Box
                sx={{
                    maxWidth: '1150px',
                    margin: '10px auto ',
                    minHeight: '150px',
                }}
            >
                <Slider {...settings}>
                    {products.map((product, index) => (
                        <CardProduct
                            sale={true}
                            theme={theme}
                            key={index}
                            imageSrc={product.imageSrc}
                            soldCount={product.soldCount}
                        />
                    ))}
                </Slider>
            </Box>
        </Box>
    );
}

export default BestSellingProduct;
