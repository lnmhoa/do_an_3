import React from 'react';
import { useTheme } from '@emotion/react';
import { Box, Stack } from '@mui/material';
import EmptyAddress from './subcomponent/EmptyAddress';

function Address(props) {
    const theme = useTheme();
    return <EmptyAddress />;
}

export default Address;
