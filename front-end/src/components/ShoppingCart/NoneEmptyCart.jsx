import { Checkbox, FormControlLabel, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeAllProducts, updateProductQuantity } from '../../redux/slides/shoppingCart/shoppingCartSlide';
import styled from '@emotion/styled';
import DeleteIcon from '@mui/icons-material/Delete';
import RedeemIcon from '@mui/icons-material/Redeem';
import ProductInCart from './ProductInCart';
import OrderInfoInCart from './OrderInfoInCart';
import { useTheme } from '@emotion/react';

const StyledStack = styled(Stack)({
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '5px 10px',
});

function NoneEmptyCart() {
    const theme = useTheme();
    // Fake data
    const products = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const [selectedProducts, setSelectedProducts] = React.useState([]);

    const handleChangeCheckAll = (event) => {
        if (event.target.checked) {
            setSelectedProducts(products.map((product) => product.id));
        } else {
            setSelectedProducts([]);
        }
    };

    const handleSelectProduct = (id) => {
        setSelectedProducts(
            (prevSelected) =>
                prevSelected.includes(id)
                    ? prevSelected.filter((productId) => productId !== id) // Bỏ chọn
                    : [...prevSelected, id], // Chọn
        );
    };

    const isAllSelected = selectedProducts.length === products.length;

    const handleRemoveProducts = (listRemove) => {
        dispatch(removeAllProducts({ listRemove }));
    };

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateProductQuantity({ id, quantity }));
    };

    const totalPrice = products.reduce((total, product) => {
        return total + product.priceSale * product.quantity; // Sử dụng giá khuyến mãi
    }, 0);

    return (
        <Stack flexDirection="row" width="100%" gap="10px">
            {/* left bar */}
            <Stack flex={4} gap="10px">
                <StyledStack flexDirection="row" justifyContent="space-between">
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={isAllSelected}
                                onChange={handleChangeCheckAll}
                                sx={{
                                    '&.Mui-checked': {
                                        color: theme.palette.secondary.main,
                                    },
                                }}
                            />
                        }
                        label="Chọn tất cả"
                    />
                    <IconButton
                        size="large"
                        sx={{
                            color: '#333',
                            '&:hover': {
                                color: '#ff0000',
                            },
                        }}
                        onClick={() => handleRemoveProducts(selectedProducts)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </StyledStack>
                <StyledStack>
                    {products.map((product) => (
                        <ProductInCart
                            key={product.id}
                            product={product}
                            onQuantityChange={handleQuantityChange}
                            onSelectChange={handleSelectProduct}
                            selectedProducts={selectedProducts}
                        />
                    ))}
                </StyledStack>
            </Stack>

            {/* right bar */}
            <Stack flex={2} gap="10px">
                <StyledStack flexDirection="row" alignItems="center" justifyContent="space-between">
                    <IconButton
                        size="large"
                        sx={{
                            color: theme.palette.primary.main,
                            '&:hover': {
                                color: '#ff0000',
                            },
                        }}
                    >
                        <RedeemIcon />
                        <Typography ml="20px">Quà tặng</Typography>
                    </IconButton>
                </StyledStack>
                <StyledStack>
                    <OrderInfoInCart totalPrice={totalPrice} />
                </StyledStack>
            </Stack>
        </Stack>
    );
}

export default NoneEmptyCart;
