import { Box, Typography } from '@mui/material';
import React from 'react';
import SlideProductSale from './SlideProductSale';

function SaleProduct(props) {
    return (
        <Box
            sx={{
                maxWidth: '1200px',
                m: '30px auto',
                borderRadius: '10px',
                p: '40px 10px 10px 10px',
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
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
            <SlideProductSale />
        </Box>
    );
}

export default SaleProduct;
