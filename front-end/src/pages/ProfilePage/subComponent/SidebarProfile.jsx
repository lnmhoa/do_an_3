import { Avatar, Box, ListItemIcon, MenuItem, Stack, Typography } from '@mui/material';
import styled from '@emotion/styled';
import Logout from '@mui/icons-material/Logout';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from 'react-router-dom';

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

function SidebarProfile(props) {
    return (
        <>
            <Stack sx={{ gap: '10px' }}>
                {/* Ảnh đại diện và tên */}
                <Stack
                    flexDirection={'row'}
                    sx={{
                        backgroundColor: '#fff',
                        padding: '10px',
                        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                        borderRadius: '10px',
                        alignItems: 'center',
                        gap: '15px',
                    }}
                >
                    <Avatar
                        alt="Tấn Đạt"
                        src="data:image/jpeg;base64,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"
                    />
                    <Stack>
                        <Typography variant="subtitle2" sx={{ fontSize: '15px', lineHeight: 1.3, fontWeight: 6000 }}>
                            Nguyễn Lê Tấn Đạt
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            sx={{ fontSize: '12px', lineHeight: 1, fontWeight: 400, letterSpacing: 1.3 }}
                        >
                            0397364664
                        </Typography>
                    </Stack>
                </Stack>
                {/* Menu cá nhân */}
                <Stack
                    sx={{
                        backgroundColor: '#fff',
                        padding: '10px',
                        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                        borderRadius: '10px',
                        minWidth: '275px',
                    }}
                >
                    <StyledMenuItem component={Link} to="/profile">
                        <StyledListItemIcon>
                            <PersonOutlineOutlinedIcon fontSize="small" />
                        </StyledListItemIcon>
                        <Typography>Thông tin cá nhân</Typography>
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <StyledListItemIcon>
                            <Inventory2OutlinedIcon fontSize="small" />
                        </StyledListItemIcon>
                        <Typography>Đơn hàng của tôi</Typography>
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <StyledListItemIcon>
                            <FavoriteBorderOutlinedIcon fontSize="small" />
                        </StyledListItemIcon>
                        <Typography>Khách hàng thân thiết</Typography>
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <StyledListItemIcon>
                            <LocationOnOutlinedIcon fontSize="small" />
                        </StyledListItemIcon>
                        <Typography>Địa chỉ nhận hàng</Typography>
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <StyledListItemIcon>
                            <Logout fontSize="small" />
                        </StyledListItemIcon>
                        <Typography>Đăng xuất</Typography>
                    </StyledMenuItem>
                </Stack>
            </Stack>
        </>
    );
}

export default SidebarProfile;
