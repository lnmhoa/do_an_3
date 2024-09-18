import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import {
    Button,
    AppBar,
    Tab,
    Tabs,
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Stack,
    Divider,
} from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const orderStatusTab = [
    {
        status: 'Tất cả',
        value: 0,
    },
    {
        status: 'Đang xử lý',
        value: 1,
    },
    {
        status: 'Đang giao',
        value: 2,
    },
    {
        status: 'Hoàn tất',
        value: 3,
    },
    {
        status: 'Đã hủy',
        value: 4,
    },
    {
        status: 'Trả hàng',
        value: 5,
    },
];

export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Stack
            sx={{
                boxShadow: theme.boxShadow.main,
                backgroundColor: '#fff',
                borderRadius: '10px',
                flex: 1,
            }}
        >
            {/* <Typography variant="h6" textTransform={'capitalize'} textAlign={'center'} p={'10px 0'}>
                Đơn hàng của tôi
            </Typography>
            <Divider /> */}
            <Box
                sx={{
                    padding: '10px 10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '10px',
                }}
            >
                <Box sx={{ bgcolor: 'white', width: '100%' }}>
                    <AppBar position="static">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            {orderStatusTab.map((item) => {
                                return <Tab key={item.value} label={item.status} {...a11yProps(item.value)} />;
                            })}
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Box sx={{ maxWidth: '100%', margin: '0 auto' }}>
                            <Card sx={{ display: 'block', marginBottom: 2 }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        paddingTop: '15px',
                                        borderBottom: '1px solid black',
                                    }}
                                >
                                    <Typography variant="button" gutterBottom sx={{ padding: '0 15px' }}>
                                        19/09/2024
                                    </Typography>
                                    <Typography variant="button" gutterBottom sx={{ padding: '0 15px' }}>
                                        Hoàn tất
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'block', marginBottom: 0 }}>
                                    <Box sx={{ display: 'flex', marginBottom: 0 }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 100, margin: '0 15px' }}
                                            image="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2020_11_12_637407989603991120_mba-2020-silver-1.png"
                                            alt="Apple"
                                        />

                                        <CardContent>
                                            <Typography variant="button">
                                                MacBook Air 13 inch M1 2020 8CPU 7GPU 8GB/256GB
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                                gutterBottom
                                                sx={{ display: 'block' }}
                                            >
                                                Số lượng: 2
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                                gutterBottom
                                                sx={{ display: 'block' }}
                                            >
                                                Giá: 500.000 đ
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            paddingBottom: '10px',
                                            borderBottom: '1px solid black',
                                        }}
                                    >
                                        <Typography variant="caption" gutterBottom sx={{ padding: '0 15px' }}>
                                            Xem chi tiết
                                        </Typography>

                                        <Typography variant="body2" gutterBottom sx={{ padding: '0 15px' }}>
                                            Thành tiền: 500.000.000 đ
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '10px 0',
                                    }}
                                >
                                    <Typography variant="caption" gutterBottom sx={{ padding: '0 15px' }}>
                                        Bạn cần hỗ trợ? Liên hệ ngay với chúng tôi.
                                    </Typography>
                                    <Button variant="contained" size="small" color="error" sx={{ margin: '0 15px' }}>
                                        Mua lại
                                    </Button>
                                </Box>
                            </Card>
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                        Item One
                    </TabPanel>
                    <TabPanel value={value} index={4} dir={theme.direction}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={5} dir={theme.direction}>
                        Item Three
                    </TabPanel>
                </Box>
            </Box>
        </Stack>
    );
}
