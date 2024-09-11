import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabsSelling(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', maxWidth: '1120px', m: '0 auto' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Điện thoại" {...a11yProps(0)} />
                <Tab label="Laptop" {...a11yProps(1)} />
                <Tab label="Máy tính bảng" {...a11yProps(2)} />
                <Tab label="Phụ kiện" {...a11yProps(3)} />
            </Tabs>
        </Box>
    );
}

export default TabsSelling;
