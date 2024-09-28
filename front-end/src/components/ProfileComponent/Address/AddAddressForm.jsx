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
import { useDispatch } from 'react-redux';
import { updateAddress } from '../../../redux/slides/address/addressSlide';

const host = 'https://provinces.open-api.vn/api/';

// const getNameByCode = (originalList, code) => {
//     const indexItem = originalList.find((item) => item.code === code);
//     return indexItem ? indexItem.name : 'Không tìm thấy';
// };

export default function AddAddressForm(props) {
    const dispatch = useDispatch();
    const { isEditAddress, addressInfo, ...others } = props;
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [provinces, setProvince] = React.useState([]);
    const [districts, setDistricts] = React.useState([]);
    const [wards, setWards] = React.useState([]);

    const [address, setAddress] = React.useState({
        addressId: addressInfo.id,
        selectedProvinceId: addressInfo?.provinceId || '',
        selectedDistrictId: addressInfo?.districtId || '',
        selectedWardId: addressInfo?.wardId || '',
        provinceAddress: addressInfo?.provinceAddress || '',
        districtAddress: addressInfo?.districtAddress || '',
        wardAddress: addressInfo?.wardAddress || '',
        receiver: addressInfo?.receiver || '',
        numberPhone: addressInfo?.numberPhone || '',
        selectedType: addressInfo?.type || 'home',
        isDefault: addressInfo?.isDefault || false,
        detailsAddress: addressInfo?.detailAddress || '',
    });

    const handleUpdateAddress = () => {
        dispatch(updateAddress(address));
        setOpen(false);
    };

    React.useEffect(() => {
        const fetchProvinces = async () => {
            try {
                const response = await axios.get(`${host}?depth=1`);
                setProvince(response.data);

                if (addressInfo.provinceId) {
                    await fetchDistricts(addressInfo.provinceId);
                }
                if (addressInfo.districtId) {
                    await fetchWards(addressInfo.districtId);
                }
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };

        fetchProvinces();
    }, [addressInfo]);

    const fetchDistricts = async (provinceId) => {
        try {
            const response = await axios.get(`${host}p/${provinceId}?depth=2`);
            setDistricts(response.data.districts);
        } catch (error) {
            console.error('Error fetching districts:', error);
        }
    };

    const fetchWards = async (districtId) => {
        try {
            const response = await axios.get(`${host}d/${districtId}?depth=2`);
            setWards(response.data.wards);
        } catch (error) {
            console.error('Error fetching wards:', error);
        }
    };

    const handleProvinceChangeId = async (e) => {
        const provinceId = e.target.value;
        await fetchDistricts(provinceId);
        setWards([]);
        setAddress((prev) => ({
            ...prev,
            selectedProvinceId: provinceId,
            selectedWardId: '',
            selectedDistrictId: '',
        }));
    };

    const handleDistrictChangeId = async (e) => {
        const districtId = e.target.value;
        setAddress((prev) => ({
            ...prev,
            selectedDistrictId: districtId,
            selectedWardId: '',
        }));
        await fetchWards(districtId);
    };

    const handleWardChangeId = (e) => {
        const wardId = e.target.value;
        setAddress((prev) => ({
            ...prev,
            selectedWardId: wardId,
        }));
    };

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleTypeAddress = (type) => {
        setAddress((prev) => ({
            ...prev,
            selectedType: type,
        }));
    };

    const handleDefaultAddress = (event) => {
        setAddress((prev) => ({
            ...prev,
            isDefault: event.target.checked,
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
                            defaultValue={isEditAddress ? address.receiver : ''}
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
                            defaultValue={isEditAddress ? address.numberPhone : ''}
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
                                value={address.selectedProvinceId}
                                onChange={handleProvinceChangeId}
                                label="Chọn thành phố"
                            >
                                <MenuItem disabled value="">
                                    <em>Chọn thành phố</em>
                                </MenuItem>
                                {provinces.map((province) => (
                                    <MenuItem key={province.code} value={province.code}>
                                        {province.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl
                            required
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            disabled={!address.selectedProvinceId}
                        >
                            <InputLabel id="district-label">Chọn quận/huyện</InputLabel>
                            <Select
                                labelId="district-label"
                                value={address.selectedDistrictId}
                                onChange={handleDistrictChangeId}
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

                        <FormControl
                            required
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            disabled={!address.selectedDistrictId}
                        >
                            <InputLabel id="ward-label">Chọn phường/xã</InputLabel>
                            <Select
                                labelId="ward-label"
                                value={address.selectedWardId}
                                label="Chọn phường/xã"
                                onChange={handleWardChangeId}
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
                            value={address.detailsAddress}
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
                            variant={address.selectedType === 'home' ? 'contained' : 'outlined'}
                            color={address.selectedType === 'home' ? 'primary' : 'default'}
                            onClick={() => handleTypeAddress('home')}
                        />
                        <Chip
                            label="Văn phòng"
                            variant={address.selectedType === 'office' ? 'contained' : 'outlined'}
                            color={address.selectedType === 'office' ? 'primary' : 'default'}
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
                    <Switch defaultChecked={address.isDefault} onChange={handleDefaultAddress} />
                </ListItem>
                {isEditAddress ? (
                    <Button
                        variant="contained"
                        onClick={handleUpdateAddress}
                        sx={{
                            width: '  %',
                            height: '40px',
                        }}
                    >
                        Cập nhật địa chỉ
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        sx={{
                            width: '  %',
                            height: '40px',
                        }}
                    >
                        Thêm địa chỉ
                    </Button>
                )}
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
