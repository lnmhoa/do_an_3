import { Box } from '@mui/material';
import { useEffect } from 'react';
import SidebarProfile from '../../components/ProfileComponent/SidebarProfile';
import BreadcumbsCustom from '../../components/BreadcumbsCustom/BreadcumbsCustom';
import { useTheme } from '@emotion/react';
import Profile from '../../components/ProfileComponent/Profile';

const BreadcrumbsItems = [
    {
        path: '/',
        name: 'Trang chủ',
        index: false,
    },
    {
        path: '/profile',
        name: 'Thông tin cá nhân',
        index: true,
    },
];

function ProfilePage({title}) {
    const theme = useTheme();
    useEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <Box
            sx={{
                width: '1200px',
                m: '10px auto',
            }}
        >
            <BreadcumbsCustom BreadcrumbsItems={BreadcrumbsItems} />
            <Box
                sx={{
                    display: 'flex',
                    gap: '10px',
                }}
            >
                <SidebarProfile />
                <Profile theme={theme} />
            </Box>
        </Box>
    );
}

export default ProfilePage;
