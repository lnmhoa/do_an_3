import * as React from 'react';
import { Box, Stack, Button, Badge } from '@mui/material';
import { useTheme } from '@emotion/react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UserMenu from './subComponent/UserMenu';
import { Link } from 'react-router-dom';
import CategoryMenu from './subComponent/CategoryMenu';
import SearchInput from './subComponent/SearchInput';
import { useSelector } from 'react-redux';

function HeaderTop(props) {
    const theme = useTheme();
    const countInCart = useSelector((state) => state.product.productData).length;
    return (
        <>
            <Box
                sx={{
                    backgroundColor: theme.backgroundColor.primary.main,
                    width: '100vw',
                    position: 'fixed',
                    boxShadow: theme.boxShadow.main,
                    padding: '15px 0',
                    zIndex: 10,
                    top: '0',
                }}
            >
                <Box
                    sx={{
                        maxWidth: '1200px',
                        minWidth: '1200px',
                        m: '0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* Logo trang web */}
                    <Link to="/">
                        <img
                            src="https://res.cloudinary.com/dta7fdnph/image/upload/v1727021524/image-removebg-preview_bwipsz.png"
                            alt=""
                            style={{ width: '200px' }}
                        />
                    </Link>

                    {/* Button danh mục */}
                    <CategoryMenu />

                    {/* Thanh tìm kiếm */}

                    {/* Người dùng */}
                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
                        <SearchInput />
                        <Link to="/shopping-cart">
                            <Badge badgeContent={countInCart} color="secondary" sx={{ top: '2px' }} size="lg">
                                <Button
                                    variant="outlined"
                                    startIcon={<ShoppingCartIcon />}
                                    sx={{ borderRadius: '50px' }}
                                >
                                    Giỏ hàng
                                </Button>
                            </Badge>
                        </Link>
                        <UserMenu />
                    </Stack>
                </Box>
            </Box>
        </>
    );
}

export default HeaderTop;
