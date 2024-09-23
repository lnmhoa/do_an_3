import { Box, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@emotion/react';
import CardProduct from '../CardProduct/CardProduct';

function SaleProduct(props) {
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
                p: '40px 10px 10px 10px',
                boxShadow: theme.boxShadow.main,
                position: 'relative',
            }}
        >
            <img
                style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
                src="https://cdn2.fptshop.com.vn/unsafe/480x0/filters:quality(100)/Group_2085662016_a7646313ae.png"
                alt=""
            />
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 'bold',
                    marginTop: '10px',
                    textAlign: 'center',
                    color: '#f3b775',
                    textTransform: 'uppercase',
                }}
            >
                Giảm Sốc - Săn Thần Tốc
            </Typography>
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
                            sale={true}
                            theme={theme}
                            key={index}
                        />
                    ))}
                </Slider>
            </Box>
        </Box>
    );
}

export default SaleProduct;
