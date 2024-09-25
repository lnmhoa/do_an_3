import { Button, Chip, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import { useTheme } from '@emotion/react';
import AddAddressForm from './AddAddressForm';

function AddressItem(props) {
    const { type, isDefault, idAddress, ...others } = props;
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
                {type === 'office' ? <HomeIcon /> : <BusinessIcon />}
            </Stack>
            <Divider orientation="vertical" flexItem />

            <Stack justifyContent={'center'} minWidth={'140px'} maxWidth={'140px'}>
                <Typography>Nguyễn Lê Tấn Đạt</Typography>
            </Stack>
            <Divider orientation="vertical" flexItem />

            <Stack justifyContent={'center'} minWidth={'90px'} maxWidth={'90px'}>
                <Typography>0397364664</Typography>
            </Stack>
            <Divider orientation="vertical" flexItem />

            <Stack justifyContent={'center'} minWidth={'265px'} maxWidth={'265px'}>
                <Typography>Đường 30/04 Hưng Lợi Ninh Kiều</Typography>
            </Stack>

            <Divider orientation="vertical" flexItem />
            <Stack flexDirection={'row'}>
                {' '}
                <AddAddressForm isEditAddress={true} />
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack
                sx={{
                    minWidth: '80px',
                    maxWidth: '80px',
                }}
            >
                {isDefault ? (
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
