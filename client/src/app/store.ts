import authReducer from "../features/auth/authSlice";
import { daysApiSlice } from "../features/days/daysApiSlice";
import dayReducer from "../features/days/daysSlice";
import spaceArrayReducer from "../features/spaces/spaceArraySlice";
import spaceReducer from "../features/spaces/spaceSlice";
import { spacesApiSlice } from "../features/spaces/spacesApiSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		space: spaceReducer,
		spaceArray: spaceArrayReducer,
		day: dayReducer,
		[spacesApiSlice.reducerPath]: spacesApiSlice.reducer,
		[daysApiSlice.reducerPath]: daysApiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(spacesApiSlice.middleware).concat(daysApiSlice.middleware);
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
