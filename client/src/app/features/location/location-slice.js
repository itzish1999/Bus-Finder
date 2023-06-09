import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name: 'location',
    initialState: {},
    reducers: {
        getlocation: (state, action) => {
            console.log("state is: ", state);
            console.log("action is: ", action)
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude;
        },
    },
});

export const { getlocation } = locationSlice.actions;

export default locationSlice.reducer;