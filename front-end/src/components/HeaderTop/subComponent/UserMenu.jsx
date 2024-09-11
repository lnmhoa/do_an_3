import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const StyledMenuItem = styled(MenuItem)({
    transition: 'background 0.1s linear, color 0.1s linear, border-left 0.1s linear',
    '&:hover': {
        paddingLeft: '20px',
        background: 'linear-gradient(90deg, rgba(119,198,255,0.3) 22%, rgba(0,212,255,0) 100%)',
        color: '#0000ff', // Màu chữ khi hover
        borderLeft: '3px solid #0000ff', // Màu border khi hover
    },
});

const StyledListItemIcon = styled(ListItemIcon)({
    color: 'inherit',
    '&:hover': {
        color: '#0000ff',
    },
});

export default function AccountMenu() {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleOver = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Tài khoản cá nhân">
                    <IconButton
                        onClick={handleOver}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                width={'250px'}
                anchorEl={anchorEl}
                disableScrollLock={true}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            width: '250px',
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <StyledMenuItem component={Link} to="/profile" onClick={handleClose}>
                    <StyledListItemIcon>
                        <PersonOutlineOutlinedIcon fontSize="small" />
                    </StyledListItemIcon>
                    <Typography>Thông tin cá nhân</Typography>
                </StyledMenuItem>

                <StyledMenuItem component={Link} to="/orders" onClick={handleClose}>
                    <StyledListItemIcon>
                        <Inventory2OutlinedIcon fontSize="small" />
                    </StyledListItemIcon>
                    <Typography>Đơn hàng của tôi</Typography>
                </StyledMenuItem>

                <StyledMenuItem component={Link} to="/loyal-customers" onClick={handleClose}>
                    <StyledListItemIcon>
                        <FavoriteBorderOutlinedIcon fontSize="small" />
                    </StyledListItemIcon>
                    <Typography>Khách hàng thân thiết</Typography>
                </StyledMenuItem>

                <StyledMenuItem component={Link} to="/delivery-address" onClick={handleClose}>
                    <StyledListItemIcon>
                        <LocationOnOutlinedIcon fontSize="small" />
                    </StyledListItemIcon>
                    <Typography>Địa chỉ nhận hàng</Typography>
                </StyledMenuItem>

                <Divider />

                <StyledMenuItem component={Link} to="/logout" onClick={handleClose}>
                    <StyledListItemIcon>
                        <Logout fontSize="small" />
                    </StyledListItemIcon>
                    Đăng xuất
                </StyledMenuItem>
            </Menu>
        </>
    );
}
