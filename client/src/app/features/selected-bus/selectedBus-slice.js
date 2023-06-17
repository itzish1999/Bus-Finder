import { createSlice } from "@reduxjs/toolkit";

const selectBusSlice = createSlice({
    name: "selectBus",
    initialState: [],
    reducers: {
        setSelectedBus: (state, action) => {
            return action.payload;
        },
        clearSelectedBus: (state) => {
            return [];
        }
    },
});

export const { setSelectedBus, clearSelectedBus } = selectBusSlice.actions;

export default selectBusSlice.reducer;