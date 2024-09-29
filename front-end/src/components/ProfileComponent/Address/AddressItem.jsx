import { Button, Chip, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import { useTheme } from '@emotion/react';
import AddAddressForm from './AddAddressForm';
import { useSelector } from 'react-redux';

function AddressItem({ idAddress }) {
    const addressInfo = useSelector((state) => state.address.filter((address) => address.id === idAddress)[0]);

    // idAddress => Lấy ra các thông tin của địa chỉ để cập nhật lại
    const theme = useTheme();
    return (
        <Stack
            flexDirection={'row'}
            sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 30px',
            }}
        >
            <Stack justifyContent={'center'} minWidth={'25px'} maxWidth={'25px'}>
                {addressInfo.type === 'office' ? <HomeIcon /> : <BusinessIcon />}
            </Stack>
            <Divider orientation="vertical" flexItem />

            <Stack justifyContent={'center'} minWidth={'140px'} maxWidth={'140px'}>
                <Typography>{addressInfo.receiver}</Typography>
            </Stack>
            <Divider orientation="vertical" flexItem />

            <Stack justifyContent={'center'} minWidth={'90px'} maxWidth={'90px'}>
                <Typography>{addressInfo.numberPhone}</Typography>
            </Stack>
            <Divider orientation="vertical" flexItem />

            <Stack
                sx={{
                    margin: '10px 0',
                    lineHeight: 1,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
                justifyContent={'center'}
                minWidth={'265px'}
                maxWidth={'265px'}
            >
                <Typography>{addressInfo.detailAddress}</Typography>
            </Stack>

            <Divider orientation="vertical" flexItem />
            <Stack flexDirection={'row'}>
                {' '}
                <AddAddressForm isEditAddress={true} addressInfo={addressInfo}/>
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack
                sx={{
                    minWidth: '80px',
                    maxWidth: '80px',
                }}
            >
                {addressInfo.isDefault ? (
                    <Chip
                        label="Mặc định"
                        variant="outlined"
                        color="primary"
                        sx={{ height: '20px', fontSize: '13px' }}
                    />
                ) : (
                    <Button variant="text" sx={{ height: '25px', color: theme.palette.secondary.main }}>
                        Xóa
                    </Button>
                )}
            </Stack>
        </Stack>
    );
}

export default AddressItem;
