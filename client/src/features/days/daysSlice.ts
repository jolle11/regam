import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Day {
	id: string;
	space: string;
	date: string;
	water: boolean;
	fertilizer: boolean;
	transplant: boolean;
	comments: string;
}

const initialState: Day = {
	id: "",
	space: "",
	date: "",
	water: false,
	fertilizer: false,
	transplant: false,
	comments: "",
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
