import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slides/counterSlide';
import userReducer from './slides/userSlide';
import shoppingCartReducer from './slides/shoppingCart/shoppingCartSlide';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        product: shoppingCartReducer,
    },
});
