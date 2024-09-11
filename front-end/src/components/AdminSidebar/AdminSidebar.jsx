import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

export default function Sidebar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const IconSidebar = [
        { label: 'Dashboard', icon: <DashboardOutlinedIcon /> },
        { label: 'Orders', icon: <ShoppingCartOutlinedIcon /> },
        { label: 'Customers', icon: <PeopleOutlineIcon /> },
        { label: 'Catalogue', icon: <ListAltOutlinedIcon /> },
        { label: 'Brands', icon: <CategoryOutlinedIcon /> },
        { label: 'Products', icon: <StorefrontOutlinedIcon /> },
    ];

    return (
        <Box sx={{ display: 'flex', bgcolor: 'background.paper', height: '100vh' }}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="AdminSidebar"
                sx={{ borderRight: 1, borderColor: 'divider', width: '200px' }}
            >
                {IconSidebar.map((tab, index) => (
                    <Tab
                        key={index}
                        sx={{}}
                        label={
                            <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', width: '100%' }}>
                                {tab.icon}
                                <Box sx={{ ml: 1 }}>{tab.label}</Box>
                            </Box>
                        }
                    />
                ))}
            </Tabs>
            <Box sx={{ flexGrow: 1 }}>{/* Nội dung cho các tab có thể được thêm vào đây nếu cần */}</Box>
        </Box>
    );
}
