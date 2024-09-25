import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { AppBar, Tab, Tabs, Box, Typography, Stack, Divider } from '@mui/material';
import CartOrder from './Order/CartOrder';

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
    { status: 'Tất cả', idStatusTab: 0 },
    { status: 'Đang xử lý', idStatusTab: 1 },
    { status: 'Đang giao', idStatusTab: 2 },
    { status: 'Hoàn tất', idStatusTab: 3 },
    { status: 'Đã hủy', idStatusTab: 4 },
    { status: 'Trả hàng', idStatusTab: 5 },
];

const orderItems = [
    {
        id: 1,
        date: '19/09/2024',
        status: 'Hoàn tất',
        productName: 'MacBook Air 13 inch M1 2020 8CPU 7GPU 8GB/256GB',
        quantity: 2,
        price: 5000000,
        total: 5000000,
        idStatus: 3,
    },
    {
        id: 2,
        date: '20/09/2024',
        status: 'Đang xử lý',
        productName: 'iPhone 13 Pro Max 256GB',
        quantity: 1,
        price: 20000000,
        total: 20000000,
        idStatus: 1,
    },
    {
        id: 3,
        date: '21/09/2024',
        status: 'Đang giao',
        productName: 'Galaxy S21 Ultra 128GB',
        quantity: 3,
        price: 18000000,
        total: 54000000,
        idStatus: 2,
    },
    {
        id: 4,
        date: '22/09/2024',
        status: 'Hoàn tất',
        productName: 'Dell XPS 13 2021',
        quantity: 1,
        price: 30000000,
        total: 30000000,
        idStatus: 3,
    },
    {
        id: 5,
        date: '23/09/2024',
        status: 'Đã hủy',
        productName: 'Lenovo ThinkPad X1 Carbon',
        quantity: 2,
        price: 35000000,
        total: 70000000,
        idStatus: 4,
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
            <Typography variant="h6" textTransform={'capitalize'} textAlign={'left'} p={'10px 30px'}>
                Đơn hàng của tôi
            </Typography>
            <Divider />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '10px',
                }}
            >
                <Box width={'100%'}>
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
                                const idStatusTab = item.idStatusTab;
                                const countForStatus =
                                    idStatusTab === 0
                                        ? orderItems.length
                                        : orderItems.filter((oderItem) => oderItem.idStatus === idStatusTab).length;
                                return (
                                    <Tab
                                        sx={{ fontSize: '13px' }}
                                        key={item.idStatusTab}
                                        label={
                                            <span>
                                                {item.status} <br />({countForStatus})
                                            </span>
                                        }
                                        {...a11yProps(item.idStatusTab)}
                                    />
                                );
                            })}
                        </Tabs>
                    </AppBar>
                    {orderStatusTab.map((tab) => (
                        <TabPanel key={tab.idStatusTab} value={value} index={tab.idStatusTab} dir={theme.direction}>
                            {tab.idStatusTab === 0
                                ? orderItems.map((item) => (
                                      <CartOrder
                                          key={item.id}
                                          date={item.date}
                                          status={item.status}
                                          productName={item.productName}
                                          quantity={item.quantity}
                                          price={item.price}
                                          total={item.total}
                                      />
                                  ))
                                : orderItems
                                      .filter((item) => item.idStatus === tab.idStatusTab)
                                      .map((item) => (
                                          <CartOrder
                                              key={item.id}
                                              date={item.date}
                                              status={item.status}
                                              productName={item.productName}
                                              quantity={item.quantity}
                                              price={item.price}
                                              total={item.total}
                                          />
                                      ))}
                        </TabPanel>
                    ))}
                </Box>
            </Box>
        </Stack>
    );
}
