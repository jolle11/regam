import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { spacesApiSlice } from "../features/spaces/spacesApiSlice";
import { daysApiSlice } from "../features/days/daysApiSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		[spacesApiSlice.reducerPath]: spacesApiSlice.reducer,
		[daysApiSlice.reducerPath]: daysApiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(spacesApiSlice.middleware).concat(daysApiSlice.middleware);
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
