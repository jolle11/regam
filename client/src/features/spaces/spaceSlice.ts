import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Space {
	id: string;
	name: string;
	days?: Day[];
}

interface Day {
	id: string;
	space: string;
	date: string;
	water: boolean;
	fertilizer: boolean;
	transplant: boolean;
	comments: string;
}

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
