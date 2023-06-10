import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './features/location/location-slice';
import busListReducer from './features/bus-list/busList-slice';

export const store = configureStore({
    reducer: {
        location: locationReducer,
        busList: busListReducer,
    },
});