// TODO: If not used, delete entire file ❗

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
		// Set day
		setDay(state, action: PayloadAction<Day>) {
			state = action.payload;
		},
	},
});

export const { setDay } = daySlice.actions;
export default daySlice.reducer;
