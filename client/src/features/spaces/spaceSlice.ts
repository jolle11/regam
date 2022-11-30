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
	reducers: {},
});
