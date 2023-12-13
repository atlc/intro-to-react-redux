import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const footer = createSlice({
    name: "footer",
    initialState: {
        value: "I can't wait until these values are just defined in global state with Redux",
    },
    reducers: {
        updateFooter: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { updateFooter } = footer.actions;

export const footerSelector = (state: RootState) => state.cardFooterReducer.value;

export default footer.reducer;
