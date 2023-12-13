import { createSlice } from '@reduxjs/toolkit';

const title = createSlice({
	name: 'title',
	initialState: {
		value: 'This prop drilling SUCKS'
	},
	reducers: {
		updateTitle: (state, action) => {
			state.value = action.payload;
		}
	},
	selectors: {
		getTitle: state => state.value
	}
});

export const { updateTitle } = title.actions;
export const { getTitle } = title.selectors;
export default title.reducer;
