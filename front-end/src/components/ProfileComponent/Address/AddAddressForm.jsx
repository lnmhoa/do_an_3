import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { Chip, FormControl, InputLabel, MenuItem, Select, Stack, Switch, TextField, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import axios from 'axios';

const host = 'https://provinces.open-api.vn/api/';

const getNameByCode = (originalList, code) => {
    const indexItem = originalList.find((item) => item.code === code);
    return indexItem ? indexItem.name : 'Không tìm thấy';
};

export default function AddAddressForm(props) {
    const { isEditAddress, ...others } = props;
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const [cities, setCities] = React.useState([]);
    const [districts, setDistricts] = React.useState([]);
    const [wards, setWards] = React.useState([]);

    const [selectedCity, setSelectedCity] = React.useState('');
    const [selectedDistrict, setSelectedDistrict] = React.useState('');
    const [selectedWard, setSelectedWard] = React.useState('');

    const [address, setAddress] = React.useState({
        citiAddress: '',
        districtAddress: '',
        wardAddress: '',
        detailsAddress: '',
        typeAddress: 'home',
        defaultAddress: false,
    });

    React.useEffect(() => {
        const fetchCities = async () => {
            const response = await axios.get(`${host}?depth=1`);
            setCities(response.data);
        };
        fetchCities();
    }, []);

    const handleCityChange = async (e) => {
        const cityId = e.target.value;
        setSelectedCity(cityId);
        setAddress((prev) => ({
            ...prev,
            citiAddress: getNameByCode(cities, cityId),
        }));
        const response = await axios.get(`${host}p/${cityId}?depth=2`);
        setDistricts(response.data.districts);
        setWards([]);
        setSelectedWard('');
        setSelectedDistrict('');
    };

    console.log(address);

    const handleDistrictChange = async (e) => {
        const districtId = e.target.value;
        setSelectedDistrict(districtId);
        setAddress((prev) => ({
            ...prev,
            districtAddress: getNameByCode(districts, districtId),
        }));
        const response = await axios.get(`${host}d/${districtId}?depth=2`);
        setWards(response.data.wards);
    };

    const handleWardChange = (e) => {
        const wardId = e.target.value;
        setAddress((prev) => ({
            ...prev,
            wardAddress: getNameByCode(wards, wardId),
        }));
        setSelectedWard(wardId);
    };

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleTypeAddress = (type) => {
        setAddress((prev) => ({
            ...prev,
            typeAddress: type,
        }));
    };

    const handleDefaultAddress = (event) => {
        setAddress((prev) => ({
            ...prev,
            defaultAddress: event.target.checked,
        }));
    };

    const handleDetailsAddress = (event) => {
        setAddress((prev) => ({
            ...prev,
            detailsAddress: event.target.value,
        }));
    };

    const DrawerList = (
        <Box
            role="presentation"
            p={'5px 20px'}
            height={'fit-content'}
            sx={{
                backgroundColor: '#f3f4f4',
            }}
        >
            <List
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                    padding: '20px 0',
                }}
            >
                <ListItem
                    disablePadding
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    }}
                >
                    <Typography color={theme.palette.primary.main}>Thông tin người nhận</Typography>
                    <Stack
                        sx={{
                            mt: '25px',
                            gap: '20px',
                            pl: '15px',
                        }}
                    >
                        <TextField
                            required
                            id="outlined-basic"
                            placeholder="Nhập họ và tên"
                            label="Họ và tên"
                            variant="outlined"
                            sx={{
                                width: 400,
                            }}
                        />
                        <TextField
                            required
                            id="outlined-basic"
                            placeholder="Nhập số điện thoại"
                            label="Số điện thoại"
                            variant="outlined"
                            sx={{
                                width: 400,
                            }}
                        />
                    </Stack>
                </ListItem>

                <ListItem
                    disablePadding
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    }}
                >
                    <Typography color={theme.palette.primary.main}>Địa chỉ nhận hàng</Typography>
                    <Stack
                        sx={{
                            mt: '10px',
                            pl: '15px',
                        }}
                    >
                        <FormControl required fullWidth variant="outlined" margin="normal">
                            <InputLabel id="city-label">Chọn thành phố</InputLabel>
                            <Select
                                labelId="city-label"
                                value={selectedCity}
                                onChange={handleCityChange}
                                label="Chọn thành phố"
                            >
                                <MenuItem disabled value="">
                                    <em>Chọn thành phố</em>
                                </MenuItem>
                                {cities.map((city) => (
                                    <MenuItem key={city.code} value={city.code}>
                                        {city.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl required fullWidth variant="outlined" margin="normal" disabled={!selectedCity}>
                            <InputLabel id="district-label">Chọn quận/huyện</InputLabel>
                            <Select
                                labelId="district-label"
                                value={selectedDistrict}
                                onChange={handleDistrictChange}
                                label="Chọn quận/huyện"
                            >
                                <MenuItem disabled value="">
                                    <em>Chọn quận/huyện</em>
                                </MenuItem>
                                {districts.map((district) => (
                                    <MenuItem key={district.code} value={district.code}>
                                        {district.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl required fullWidth variant="outlined" margin="normal" disabled={!selectedDistrict}>
                            <InputLabel id="ward-label">Chọn phường/xã</InputLabel>
                            <Select
                                labelId="ward-label"
                                value={selectedWard}
                                label="Chọn phường/xã"
                                onChange={handleWardChange}
                            >
                                <MenuItem disabled value="">
                                    <em>Chọn phường/xã</em>
                                </MenuItem>
                                {wards.map((ward) => (
                                    <MenuItem key={ward.code} value={ward.code}>
                                        {ward.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            id="outlined-basic"
                            placeholder="Nhập địa chỉ cụ thể"
                            label="Địa chỉ cụ thể"
                            variant="outlined"
                            onChange={handleDetailsAddress}
                            sx={{
                                width: 400,
                                mt: '15px',
                            }}
                        />
                    </Stack>
                </ListItem>

                <ListItem
                    disablePadding
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography color={theme.palette.primary.main}>Loại địa chỉ</Typography>
                    <Stack flexDirection={'row'} gap={'20px'}>
                        <Chip
                            label="Nhà riêng"
                            variant={address.typeAddress === 'home' ? 'contained' : 'outlined'}
                            color={address.typeAddress === 'home' ? 'primary' : 'default'}
                            onClick={() => handleTypeAddress('home')}
                        />
                        <Chip
                            label="Văn phòng"
                            variant={address.typeAddress === 'office' ? 'contained' : 'outlined'}
                            color={address.typeAddress === 'office' ? 'primary' : 'default'}
                            onClick={() => handleTypeAddress('office')}
                        />
                    </Stack>
                </ListItem>

                <ListItem
                    disablePadding
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography color={theme.palette.primary.main}>Đặt làm địa chỉ mặc định</Typography>
                    <Switch onChange={handleDefaultAddress} />
                </ListItem>
                <Button
                    variant="contained"
                    sx={{
                        width: '  %',
                        height: '40px',
                    }}
                >
                    Thêm địa chỉ
                </Button>
            </List>
        </Box>
    );

    return (
        <>
            {isEditAddress ? (
                <Button
                    onClick={toggleDrawer(true)}
                    variant="text"
                    sx={{ height: '25px', color: theme.palette.secondary.main }}
                >
                    Sửa
                </Button>
            ) : (
                <Button
                    sx={{ width: '300px', marginTop: '20px' }}
                    variant="contained"
                    color="primary"
                    onClick={toggleDrawer(true)}
                >
                    Thêm địa chỉ mới
                </Button>
            )}
            <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                anchor={'right'}
                sx={{
                    width: 'fit-content',
                }}
            >
                <Chip
                    label="Địa chỉ nhận hàng"
                    icon={<HomeWorkIcon />}
                    variant="contained"
                    sx={{
                        fontSize: '18px',
                        padding: '30px 0',
                        borderRadius: 0,
                        position: 'sticky',
                        top: 0,
                        zIndex: 10,
                        border: 'none',
                        backgroundColor: theme.palette.primary.main,
                        color: '#fff',
                        textTransform: 'uppercase',
                        '& .MuiChip-icon': {
                            fontSize: '30px',
                            color: '#fff',
                            mr: '5px',
                        },
                    }}
                />
                {DrawerList}
            </Drawer>
        </>
    );
}
