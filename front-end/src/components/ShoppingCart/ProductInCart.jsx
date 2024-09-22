import { Checkbox, Divider, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../redux/slides/shoppingCart/shoppingCartSlide';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTheme } from '@emotion/react';
import { formatCurrencyVN } from '../../utils/formatCurrencyVN';

function ProductInCart({ product, onQuantityChange, onSelectChange, selectedProducts }) {
    const { id, name, img, price, priceSale, quantity, ...others } = product;
    const dispatch = useDispatch();
    const theme = useTheme();

    const handleIncrease = () => onQuantityChange(product.id, product.quantity + 1);
    const handleDecrease = () => {
        if (product.quantity > 1) {
            onQuantityChange(product.id, product.quantity - 1);
        }
    };

    const handleRemoveProduct = (id) => {
        dispatch(removeProduct({ id }));
    };

    return (
        <>
            <Stack flexDirection="row" justifyContent="space-between" alignItems="center" p="20px 0 30px 0">
                <Checkbox
                    sx={{ '&.Mui-checked': { color: theme.palette.secondary.main } }}
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => {
                        onSelectChange(id);
                    }}
                />
                <Stack sx={{ border: '1px solid rgba(0, 0, 0, 0.12)', p: '5px', borderRadius: '5px' }}>
                    <img src={img} alt="" style={{ width: '65px', height: '65px' }} />
                </Stack>
                <Stack>
                    <Typography
                        sx={{
                            lineHeight: 1,
                            textTransform: 'capitalize',
                            fontSize: '17px',
                            maxWidth: '220px',
                            minWidth: '220px',
                        }}
                    >
                        {name}
                    </Typography>
                </Stack>
                <Stack>
                    <Typography
                        variant="subtitle1"
                        sx={{ letterSpacing: 1.3, color: '#ff0000', fontWeight: 'bold', fontSize: '15px' }}
                    >
                        {formatCurrencyVN(priceSale)}
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
                        {formatCurrencyVN(price)}
                    </Typography>
                </Stack>
                <Stack
                    flexDirection="row"
                    alignItems="center"
                    sx={{ border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: '5px' }}
                >
                    <IconButton
                        onClick={handleDecrease}
                        disabled={quantity <= 1}
                        size="large"
                        sx={{ color: '#333', '&:hover': { color: theme.palette.secondary.main }, padding: '2px 5px' }}
                    >
                        <RemoveIcon />
                    </IconButton>
                    <Divider orientation="vertical" flexItem />
                    <Typography variant="body2" style={{ margin: '0 10px', minWidth: '20px', textAlign: 'center' }}>
                        {quantity}
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    <IconButton
                        onClick={handleIncrease}
                        size="large"
                        sx={{ color: '#333', '&:hover': { color: theme.palette.primary.main }, padding: '2px 5px' }}
                    >
                        <AddIcon />
                    </IconButton>
                </Stack>
                <IconButton
                    size="large"
                    sx={{ color: '#333', '&:hover': { color: '#ff0000' } }}
                    onClick={() => handleRemoveProduct(product.id)}
                >
                    <DeleteIcon />
                </IconButton>
            </Stack>
            <Divider orientation="horizontal" flexItem />
        </>
    );
}

export default ProductInCart;
