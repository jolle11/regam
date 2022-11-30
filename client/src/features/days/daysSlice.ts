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
	reducers: {},
});
