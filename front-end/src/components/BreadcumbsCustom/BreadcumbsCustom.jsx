import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { Box, Breadcrumbs, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function BreadcumbsCustom(props) {
    const theme = useTheme();
    return (
        <Box role="presentation" mb={'10px'}>
            <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
                <Link
                    underline="hover"
                    to="/"
                    style={{
                        color: theme.text.primary.main,
                    }}
                >
                    Trang chủ
                </Link>
                <Link
                    underline="hover"
                    style={{
                        color: theme.text.primary.main,
                    }}
                    to="/shopping-cart"
                >
                    Giỏ hàng
                </Link>
            </Breadcrumbs>
        </Box>
    );
}

export default BreadcumbsCustom;
