import { createSlice } from "@reduxjs/toolkit";

const busListSlice = createSlice({
    name: 'busList',
    initialState: [],
    reducers: {
        getBusList: (state, action) => {
            return action.payload
        },
    },
});

export const { getBusList } = busListSlice.actions;

export default busListSlice.reducer