import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Space } from "../../ts";

const initialState: Space[] = [];

const spaceArraySlice = createSlice({
	name: "spaceArray",
	initialState,
	reducers: {
		// Set space
		// TODO: KEEP SPACES IN LOCAL STORAGE???
		setSpaceArray(state, action: PayloadAction<Space[]>) {
			state.length = 0; // Assignation to [] wasn't working
			if (state.length <= action.payload.length) {
				action.payload.map((space) => {
					state.push(space);
				});
			}
		},
	},
});

export const { setSpaceArray } = spaceArraySlice.actions;
export default spaceArraySlice.reducer;
