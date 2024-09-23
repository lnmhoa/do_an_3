import { useTheme } from '@emotion/react';
import { Button, Stack, Typography } from '@mui/material';
import AddAddressForm from './AddAddressForm';
import React from 'react';

function EmptyAddress(props) {
    const theme = useTheme();
    return (
        <Stack
            sx={{
                borderRadius: '10px',
                boxShadow: theme.boxShadow.main,
                backgroundColor: '#fff',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: '30px 10px',
                flexDirection: 'row',
            }}
        >
            <img src="https://fptshop.com.vn/img/empty_address_book.png" alt="" style={{ width: '400px' }} />
            <Stack>
                <Typography
                    sx={{
                        color: theme.text.primary.main,
                    }}
                    variant="h6"
                >
                    Bạn chưa lưu địa chỉ nào
                </Typography>
                <Typography
                    sx={{
                        color: theme.text.primary.main,
                    }}
                >
                    Cập nhật địa chỉ ngay để có trải nghiệm mua hàng nhanh nhất.
                </Typography>
                <AddAddressForm />
            </Stack>
        </Stack>
    );
}

export default EmptyAddress;
