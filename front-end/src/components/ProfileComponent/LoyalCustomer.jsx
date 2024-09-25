import { useTheme } from '@emotion/react';
import { Stack } from '@mui/material';
import React from 'react';

function LoyalCustomer(props) {
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
          Bạn là khách hàng thân thiết
        </Stack>
    );
}

export default LoyalCustomer;
