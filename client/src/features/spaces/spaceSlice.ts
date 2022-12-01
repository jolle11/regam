import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Day, Space } from "../../ts";

const initialState: Space = {
	id: "",
	name: "",
	days: [],
};

const spaceSlice = createSlice({
	name: "space",
	initialState,
	reducers: {
		// Set space
		setSpace(state, action: PayloadAction<Space>) {
			state.id = action.payload.id;
			state.name = action.payload.name;
			state.days = action.payload.days;
		},
	},
});

export const { setSpace } = spaceSlice.actions;
export default spaceSlice.reducer;
