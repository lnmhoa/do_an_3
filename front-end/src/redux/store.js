import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slides/counter/counterSlide';
import userReducer from './slides/user/userSlide';
import shoppingCartReducer from './slides/shoppingCart/shoppingCartSlide';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        product: shoppingCartReducer,
    },
});
