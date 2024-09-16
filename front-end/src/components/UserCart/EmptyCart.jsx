import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function EmptyCart(props) {
    return (
        <Box
            sx={{
                backgroundColor: '#fff',
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            }}
        >
            <Stack>
                <Typography variant="h4">Chưa có sản phẩm nào trong giỏ hàng</Typography>
                <Typography variant="subtitle1" mb={'10px'}>
                    Cùng mua sắm các sản phẩm công nghệ với CT MOBILE
                </Typography>
                <Link to="/">
                    <Button variant="contained">Mua Hàng SIÊU ƯU ĐÃI</Button>
                </Link>
            </Stack>
            <Stack>
                <img src="https://fptshop.com.vn/img/empty_cart.png?w=1920&q=100" alt="" style={{ width: '500px' }} />
            </Stack>
        </Box>
    );
}

export default EmptyCart;
