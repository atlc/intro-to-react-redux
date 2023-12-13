import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const title = createSlice({
    name: "title",
    initialState: {
        value: "This prop drilling SUCKS",
    },
    reducers: {
        updateTitle: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { updateTitle } = title.actions;

export const titleSelector = (state: RootState) => state.cardTitleReducer.value;

export default title.reducer;
