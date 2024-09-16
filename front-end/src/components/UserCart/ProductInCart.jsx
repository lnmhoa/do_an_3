import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    IconButton,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Stack,
    Typography,
} from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTheme } from '@emotion/react';

function ProductInCart(props) {
    const theme = useTheme();
    const [color, setColor] = React.useState('');
    const [quantity, setQuantity] = React.useState(1); // Khởi tạo số lượng với giá trị 1

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1)); // Không cho phép số lượng nhỏ hơn 1
    };

    const handleChangeColor = (event) => {
        setColor(event.target.value);
    };
    return (
        <>
            <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} p={'20px 0 30px 0'}>
                <Checkbox
                    sx={{
                        '&.Mui-checked': {
                            color: theme.palette.secondary.main,
                        },
                    }}
                />
                <Stack
                    sx={{
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        p: '5px',
                        borderRadius: '5px',
                    }}
                >
                    <img
                        src="https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/2022_8_10_637957658354316100_samsung-galaxy-z-flip4-tim-1.jpg"
                        alt=""
                        style={{
                            width: '50px',
                            height: '50px',
                        }}
                    />
                </Stack>
                <Stack>
                    <Typography
                        sx={{
                            lineHeight: 1,
                            textTransform: 'capitalize',
                            fontSize: '17px',
                            maxWidth: '270px', // Điều chỉnh chiều rộng tối đa theo nhu cầu
                        }}
                    >
                        iPhone 15 Pro Maxxxxxxxxxxxxxxxxxxxxxx
                    </Typography>
                </Stack>
                <Stack>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            letterSpacing: 1.3,
                            color: '#ff0000',
                            lineHeight: 1.5,
                            fontWeight: 'bold',
                            fontSize: '15px',
                        }}
                    >
                        5.000.000 &#8363;{' '}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        sx={{
                            letterSpacing: 1.3,
                            opacity: 0.7,
                            lineHeight: 1,
                            fontSize: '13px',
                            textDecoration: 'line-through',
                        }}
                    >
                        10.000.000 &#8363;{' '}
                    </Typography>
                </Stack>
                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    sx={{
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        borderRadius: '5px',
                    }}
                >
                    <IconButton
                        onClick={handleDecrease}
                        disabled={quantity <= 1}
                        size="large"
                        sx={{
                            color: '#333',
                            '&:hover': {
                                color: theme.palette.secondary.main,
                            },
                            padding: '2px 5px',
                        }}
                    >
                        <RemoveIcon />
                    </IconButton>
                    <Divider orientation="vertical" flexItem />
                    <Typography variant="body2" style={{ margin: '0 20px' }}>
                        {quantity}
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    <IconButton
                        onClick={handleIncrease}
                        size="large"
                        sx={{
                            color: '#333',
                            '&:hover': {
                                color: theme.palette.primary.main,
                            },
                            padding: '2px 5px',
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Stack>
                <IconButton
                    size="large"
                    sx={{
                        color: '#333',
                        '&:hover': {
                            color: '#ff0000',
                        },
                    }}
                >
                    <DeleteIcon />
                </IconButton>
            </Stack>
            <Divider orientation="horizontal" flexItem />
        </>
    );
}

export default ProductInCart;
