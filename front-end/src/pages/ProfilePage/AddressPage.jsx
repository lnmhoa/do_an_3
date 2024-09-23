import { Box } from '@mui/material';
import { useEffect } from 'react';
import SidebarProfile from '../../components/ProfileComponent/SidebarProfile';
import { useTheme } from '@emotion/react';
import Address from '../../components/ProfileComponent/Address/Address';

function AddressPage() {
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
                <Address theme={theme} />
            </Box>
        </Box>
    );
}

export default AddressPage;
