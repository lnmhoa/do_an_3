import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { Box, Button, Stack, Typography } from '@mui/material';

function EmptyCart(props) {
    const theme = useTheme();
    return (
        <Box
            sx={{
                backgroundColor: '#fff',
                boxShadow: theme.boxShadow.main,
                padding: '10px 40px',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: '10px',
            }}
        >
            <Stack>
                <Typography variant="h5">Chưa có sản phẩm nào trong giỏ hàng</Typography>
                <Typography variant="subtitle1" mb={'10px'}>
                    Cùng mua sắm các sản phẩm công nghệ với CT MOBILE
                </Typography>
                <Link to="/">
                    <Button variant="contained">Mua Hàng SIÊU ƯU ĐÃI</Button>
                </Link>
            </Stack>
            <Stack>
                <img src="https://fptshop.com.vn/img/empty_cart.png?w=1920&q=100" alt="" style={{ width: '700px' }} />
            </Stack>
        </Box>
    );
}

export default EmptyCart;
