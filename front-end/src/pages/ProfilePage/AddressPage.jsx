import React from 'react';
import { Box } from '@mui/material';
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

const listAddress = [
    // {
    //     id: 0,
    //     provinceAddress: 'Cần Thơ',
    //     districtAddress: 'Ninh Kiều',
    //     detailAddress: 'Đường 30/04 Phường Hưng Lợi',
    // },
    // {
    //     id: 1,
    //     provinceAddress: 'Hồ Chí Minh',
    //     districtAddress: 'Quận 1',
    //     detailAddress: 'Đường Nguyễn Huệ, Phường Bến Nghé',
    // },
    // {
    //     id: 2,
    //     provinceAddress: 'Hà Nội',
    //     districtAddress: 'Quận Hoàn Kiếm',
    //     detailAddress: 'Phố Hàng Bạc, Phường Hàng Bạc',
    // },
    // {
    //     id: 3,
    //     provinceAddress: 'Đà Nẵng',
    //     districtAddress: 'Quận Hải Châu',
    //     detailAddress: 'Đường Bạch Đằng, Phường Thạch Thang',
    // },
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
                {listAddress.length === 0 ? <EmptyAddress /> : <NoneEmptyAddress />}
            </Box>
        </Box>
    );
}

export default AddressPage;
