import React from 'react';
import { useTheme } from '@emotion/react';
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatCurrencyVN } from '../../../utils/formatCurrencyVN';
import { Checkbox, Divider, IconButton, Stack, Typography } from '@mui/material';
import { removeProduct } from '../../../redux/slides/shoppingCart/shoppingCartSlide';

function ProductInCart({ product, onQuantityChange, onSelectChange, selectedProducts }) {
    const theme = useTheme();
    const dispatch = useDispatch();

    const { id, name, img, price, priceSale, quantity, ...others } = product;

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
            <Stack
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                p="20px 15px 30px 10px"
                borderRadius={'8px'}
                bgcolor="#fff"
            >
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
                        sx={{
                            letterSpacing: 1.3,
                            color: theme.palette.secondary.main,
                            fontWeight: 'bold',
                            fontSize: '15px',
                        }}
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
                        sx={{
                            color: theme.palette.black.main,
                            '&:hover': { color: theme.palette.secondary.main },
                            padding: '2px 5px',
                        }}
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
                        sx={{
                            color: theme.palette.black.main,
                            '&:hover': { color: theme.palette.primary.main },
                            padding: '2px 5px',
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Stack>
                <IconButton
                    size="large"
                    sx={{
                        color: theme.palette.black.main,
                        padding: '0',
                        '&:hover': { color: theme.palette.secondary.main },
                    }}
                    onClick={() => handleRemoveProduct(product.id)}
                >
                    <DeleteIcon />
                </IconButton>
            </Stack>
        </>
    );
}

export default ProductInCart;
