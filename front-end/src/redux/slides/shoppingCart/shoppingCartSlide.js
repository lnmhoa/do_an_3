import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productData: [
        {
            id: 1,
            name: 'iPhone 15 Pro Max',
            quantity: 1,
            price: 10000000,
            priceSale: 8000000,
            img: 'https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/2022_8_10_637957658354316100_samsung-galaxy-z-flip4-tim-1.jpg',
        },
        {
            id: 2,
            name: 'Samsung Galaxy Z Flip4',
            quantity: 1,
            price: 20000000,
            priceSale: 18000000,
            img: 'https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/2022_8_10_637957658354316100_samsung-galaxy-z-flip4-tim-1.jpg',
        },
        {
            id: 3,
            name: 'Xiaomi Mi 11',
            quantity: 1,
            price: 15000000,
            priceSale: 13000000,
            img: 'https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/2022_8_10_637957658354316100_samsung-galaxy-z-flip4-tim-1.jpg',
        },
    ],
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

export const { updateProductQuantity, removeProduct, removeAllProducts } = shoppingCartSlide.actions;
export default shoppingCartSlide.reducer;
