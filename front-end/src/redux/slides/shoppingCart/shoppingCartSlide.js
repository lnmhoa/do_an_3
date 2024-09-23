import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productData: [],
    discountValue: 0,
};

export const shoppingCartSlide = createSlice({
    name: 'product',
    initialState,
    reducers: {
        calculateTotalPrice: (state) => {
            return state.productData.reduce((total, product) => {
                return total + product.priceSale * product.quantity;
            }, 0);
        },
        addProduct: (state, action) => {
            const { id, name, price, priceSale, imageSrc } = action.payload;
            const existingProduct = state.productData.find((product) => product.id === id);
            if (existingProduct) {
                return {
                    ...state,
                    productData: state.productData.map((product) =>
                        product.id === id ? { ...product, quantity: product.quantity + 1 } : product,
                    ),
                };
            } else {
                return {
                    ...state,
                    productData: [
                        ...state.productData,
                        {
                            id: id,
                            name: name,
                            quantity: 1,
                            price: price,
                            priceSale: priceSale,
                            img: imageSrc,
                        },
                    ],
                };
            }
        },
        updateProductQuantity: (state, action) => {
            const { id, quantity } = action.payload;

            const product = state.productData.find((product) => product.id === id);
            if (product) {
                product.quantity = quantity;
            }
            state.totalPrice = state.productData.reduce((total, product) => {
                return total + product.priceSale * product.quantity;
            }, 0);
        },
        // addProduct: (state, action) => {

        // },

        removeProduct: (state, action) => {
            const { id } = action.payload;
            return {
                ...state,
                productData: state.productData.filter((product) => product.id !== id),
            };
        },
        removeAllProducts: (state, action) => {
            const { listRemove } = action.payload;
            return {
                ...state,
                productData: state.productData.filter((product) => !listRemove.includes(product.id)),
            };
        },
    },
});

export const { updateProductQuantity, removeProduct, removeAllProducts, addProduct } = shoppingCartSlide.actions;
export default shoppingCartSlide.reducer;
