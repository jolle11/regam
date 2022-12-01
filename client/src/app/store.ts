import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import spaceReducer from "../features/spaces/spaceSlice";
import spaceArrayReducer from "../features/spaces/spaceArraySlice";
import dayReducer from "../features/days/daysSlice";
import { spacesApiSlice } from "../features/spaces/spacesApiSlice";
import { daysApiSlice } from "../features/days/daysApiSlice";

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
