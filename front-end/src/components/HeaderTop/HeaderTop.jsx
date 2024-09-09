import * as React from 'react';
import { Box, Stack, Button, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import CategoryMenu from './subComponent/CategoryMenu';
import { useTheme } from '@emotion/react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from 'styled-components';
import Reorder from '@mui/icons-material/Reorder';

const StyledInput = styled.input`
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    padding: 10px 35px 10px 20px;
    border-radius: 30px;
    width: 400px;
    font-size: 15px;

    &::placeholder {
        color: #888;
        font-style: italic;
        opacity: 0.5;
        font-size: 13px;
    }
`;

function HeaderTop(props) {
    const theme = useTheme();
    return (
        <>
            <Box
                sx={{
                    backgroundColor: theme.backgroundColor.primary.main,
                    width: '100%',
                    padding: '15px 100px',
                    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'fixed',
                    top: '0',
                    zIndex: 10,
                }}
            >
                <img src="https://res.cloudinary.com/dbtvigpjm/image/upload/v1725895344/logo_exwvly.png" alt="" style={{width: '200px'}}/>

                <CategoryMenu />

                <Stack sx={{ flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
                    <StyledInput
                        type="text"
                        theme={theme}
                        placeholder="Nhập tên điện thoại, phụ kiện, máy tính... cần tìm"
                    />
                    <SearchIcon sx={{ position: 'absolute', right: '7px', color: theme.palette.primary.main }} />
                </Stack>

                <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
                    <Badge color="secondary" badgeContent={99}>
                        <CircleNotificationsIcon sx={{ fontSize: '38px', color: theme.palette.primary.main }} />
                    </Badge>

                    <Link>
                        <AccountCircleIcon
                            sx={{
                                fontSize: '38px',
                                color: theme.palette.primary.main,
                                display: 'flex',
                                alignItems: ' center',
                            }}
                        />
                    </Link>
                    <Link>
                        <Badge badgeContent={4} color="secondary" sx={{ top: '2px' }} size="lg">
                            <Button variant="outlined" startIcon={<ShoppingCartIcon />} sx={{ borderRadius: '50px' }}>
                                Giỏ hàng
                            </Button>
                        </Badge>
                    </Link>
                </Stack>
            </Box>
        </>
    );
}

export default HeaderTop;
