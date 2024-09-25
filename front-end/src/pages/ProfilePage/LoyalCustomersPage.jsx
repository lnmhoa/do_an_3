import React from 'react';
import { Box } from '@mui/material';
import SidebarProfile from '../../components/ProfileComponent/SidebarProfile';
import BreadcumbsCustom from '../../components/BreadcumbsCustom/BreadcumbsCustom';
import LoyalCustomer from '../../components/ProfileComponent/LoyalCustomer';

const BreadcrumbsItems = [
    {
        path: '/',
        name: 'Trang chủ',
        index: false,
    },
    {
        path: '/loyal-customers',
        name: 'Khách hàng thân thiết',
        index: true,
    },
];

function AddressPage({ title }) {
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
                <LoyalCustomer />
            </Box>
        </Box>
    );
}

export default AddressPage;
