import { Box } from '@mui/material';
import { useEffect } from 'react';
import SidebarProfile from './subComponent/SidebarProfile';
import { useTheme } from '@emotion/react';
import Profile from './subComponent/Profile';

function ProfilePage() {
    const theme = useTheme();
    let defaultTitle = 'Trang chủ';
    useEffect(() => {
        document.title = defaultTitle;
    }, [defaultTitle]);
    return (
        <Box
            sx={{
                width: '1200px',
                m: '10px auto',
            }}
        >
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
