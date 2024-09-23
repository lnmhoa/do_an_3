import { Box } from '@mui/material';
import SidebarProfile from '../../components/ProfileComponent/SidebarProfile';
import Order from '../../components/ProfileComponent/Order';
import BreadcumbsCustom from '../../components/BreadcumbsCustom/BreadcumbsCustom';
import React from 'react';

const BreadcrumbsItems = [
    {
        path: '/',
        name: 'Trang chủ',
        index: false,
    },
    {
        path: '/order',
        name: 'Đơn hàng của tôi',
        index: true,
    },
];

function OrderPage({ title }) {
    React.useEffect(() => {
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
                <Order />
            </Box>
        </Box>
    );
}

export default OrderPage;
