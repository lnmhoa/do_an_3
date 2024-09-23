import { useTheme } from '@emotion/react';
import { Stack } from '@mui/material';
import React from 'react';

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
        ></Stack>
    );
}

export default NoneEmptyAddress;
