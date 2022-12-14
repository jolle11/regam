import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Day } from "../../ts";

const initialState: Day = {
	id: "",
	space: "",
	date: "",
	water: false,
	fertilizer: false,
	transplant: false,
	comment: "",
};

const daySlice = createSlice({
	name: "day",
	initialState,
	reducers: {
		// ð§
		setWater(state, action: PayloadAction<boolean>) {
			state.water = action.payload;
		},
		// ð
		setFertilizer(state, action: PayloadAction<boolean>) {
			state.fertilizer = action.payload;
		},
		// ðŠī
		setTransplant(state, action: PayloadAction<boolean>) {
			state.transplant = action.payload;
		},
		// ð
		setComment(state, action: PayloadAction<string>) {
			state.comment = action.payload;
		},
		reset(state) {
			state.water = initialState.water;
			state.fertilizer = initialState.fertilizer;
			state.transplant = initialState.transplant;
			state.comment = initialState.comment;
		},
	},
});

export const { setWater, setFertilizer, setTransplant, setComment, reset } = daySlice.actions;
export default daySlice.reducer;
