import { Checkbox, FormControlLabel, IconButton, Stack } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeAllProducts, updateProductQuantity } from '../../redux/slides/shoppingCart/shoppingCartSlide';
import styled from '@emotion/styled';
import DeleteIcon from '@mui/icons-material/Delete';
import ProductInCart from './subcomponent/ProductInCart';
import OrderInfoInCart from './subcomponent/OrderInfoInCart';
import { useTheme } from '@emotion/react';

const StyledStack = styled(Stack)({
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '5px 10px',
});

function NoneEmptyCart() {
    const theme = useTheme();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.productData);
    const [selectedProducts, setSelectedProducts] = React.useState([]);

    // Xử lý sự kiện chọn/bỏ chọn tất cả sản phẩm
    const handleChangeCheckAll = (event) => {
        setSelectedProducts(event.target.checked ? products.map((product) => product.id) : []);
    };

    // Xử lý sự kiện chọn/bỏ chọn từng sản phẩm
    const handleSelectProduct = (id) => {
        setSelectedProducts(
            (prevSelected) =>
                prevSelected.includes(id)
                    ? prevSelected.filter((productId) => productId !== id) // Bỏ chọn
                    : [...prevSelected, id], // Chọn
        );
    };

    // Kiểm tra xem tất cả sản phẩm đã được chọn hay chưa
    const isAllSelected = selectedProducts.length === products.length;

    // Xử lý xóa sản phẩm
    const handleRemoveProducts = (listRemove) => {
        dispatch(removeAllProducts({ listRemove }));
    };

    // Xử lý thay đổi số lượng sản phẩm
    const handleQuantityChange = (id, quantity) => {
        dispatch(updateProductQuantity({ id, quantity }));
    };

    return (
        <Stack flexDirection="row" width="100%" gap="10px">
            <Stack flex={4}>
                <Stack gap="10px">
                    <Stack
                        flexDirection="row"
                        justifyContent="space-between"
                        sx={{
                            borderRadius: '8px',
                            backgroundColor: '#fff',
                            padding: '5px 13px 5px 22px',
                        }}
                    >
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
                            label={
                                <span style={{ color: theme.text.primary.main }}>
                                    {'Chọn tất cả (' + selectedProducts.length + ')'}
                                </span>
                            }
                        />
                        {selectedProducts.length > 0 && (
                            <IconButton
                                size="large"
                                sx={{
                                    color: '#333',
                                    padding: '0',
                                    '&:hover': {
                                        color: '#ff0000',
                                    },
                                }}
                                onClick={() => handleRemoveProducts(selectedProducts)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        )}
                    </Stack>
                    {products.map((product) => (
                        <ProductInCart
                            key={product.id}
                            product={product}
                            onQuantityChange={handleQuantityChange}
                            onSelectChange={handleSelectProduct}
                            selectedProducts={selectedProducts}
                        />
                    ))}
                </Stack>
            </Stack>

            {/* right bar */}
            <Stack flex={2}>
                <StyledStack>
                    <OrderInfoInCart />
                </StyledStack>
            </Stack>
        </Stack>
    );
}

export default NoneEmptyCart;
