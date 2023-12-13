import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const text = createSlice({
    name: "text",
    initialState: {
        value: "Seriously, it's so bad",
    },
    reducers: {
        updateText: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { updateText } = text.actions;

export const textSelector = (state: RootState) => state.cardTextReducer.value;

export default text.reducer;
