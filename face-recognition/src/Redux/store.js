import { configureStore } from '@reduxjs/toolkit';
import ipReducer from './reducers/ipSlice';

const store = configureStore({
    reducer: {
        ip: ipReducer,
    },
});

export default store;
