import { useTheme } from '@emotion/react';
import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import AddressItem from './AddressItem';

function NoneEmptyAddress(props) {
    const theme = useTheme();
    return (
        <Stack
            sx={{
                boxShadow: theme.boxShadow.main,
                backgroundColor: '#fff',
                borderRadius: '10px',
                flex: 1,
            }}
        >
            <Typography variant="h6" textTransform={'capitalize'} textAlign={'left'} p={'10px 30px'}>
                Địa chỉ nhận hàng
            </Typography>
            <Divider />
            <Stack p={'10px 0px'} minHeight={'300px'}>
                <AddressItem isDefault={true} type={'home'} idAddress={1} />
                <AddressItem isDefault={false} type={'office'} idAddress={2} />
            </Stack>
        </Stack>
    );
}

export default NoneEmptyAddress;
