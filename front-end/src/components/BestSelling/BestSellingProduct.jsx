import React from 'react';
import CardProduct from '../CardProduct/CardProduct';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import TabsSelling from './TabsSelling/TabsSelling';

function BestSellingProduct(props) {
    const { productData, ...others } = props;
    const theme = useTheme();

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
                boxShadow: theme.boxShadow.main,
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
                    {productData.map((product, index) => (
                        <CardProduct
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            priceSale={product.priceSale}
                            imageSrc={product.img}
                            soldCount={1}
                            sale={false}
                            theme={theme}
                            key={index}
                        />
                    ))}
                </Slider>
            </Box>
        </Box>
    );
}

export default BestSellingProduct;
