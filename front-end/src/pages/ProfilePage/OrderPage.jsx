import { Box } from '@mui/material';
import SidebarProfile from './subComponent/SidebarProfile';
import Order from './subComponent/Order';

function OrderPage() {
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
                <Order />
            </Box>
        </Box>
    );
}

export default OrderPage;
