import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import SidebarProfile from '../../components/ProfileComponent/SidebarProfile';
import BreadcumbsCustom from '../../components/BreadcumbsCustom/BreadcumbsCustom';
import NoneEmptyAddress from '../../components/ProfileComponent/Address/NoneEmptyAddress';
import EmptyAddress from '../../components/ProfileComponent/Address/EmptyAddress';

const BreadcrumbsItems = [
    {
        path: '/',
        name: 'Trang chủ',
        index: false,
    },
    {
        path: '/delivery-address',
        name: 'Địa chỉ nhận hàng',
        index: true,
    },
];

function AddressPage({ title }) {
    const addressList = useSelector((state) => state.address);

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
                {addressList.length === 0 ? <EmptyAddress /> : <NoneEmptyAddress addressList={addressList} />}
            </Box>
        </Box>
    );
}

export default AddressPage;
