import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './features/location/location-slice';

export const store = configureStore({
    reducer: {
        location: locationReducer,
    },
});