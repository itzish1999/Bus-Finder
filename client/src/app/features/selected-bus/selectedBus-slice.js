import { createSlice } from "@reduxjs/toolkit";

const selectBusSlice = createSlice({
    name: "SELECT_BUS",
    initialState: {},
    reducers: {
        getSelectedBus: (state, action) => {
            return action.payload;
        },
    },
});

export const { getSelectedBus } = selectBusSlice.actions;

export default selectBusSlice.reducer;