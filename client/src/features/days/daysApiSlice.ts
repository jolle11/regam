import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Day, Space, User } from "../../ts";

export const daysApiSlice = createApi({
	reducerPath: "daysApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:5001/api/spaces",
		prepareHeaders: (headers) => {
			const user: User = JSON.parse(localStorage.getItem("user") || "{}");
			if (user) {
				headers.set("authorization", `Bearer ${user.token}`);
			}
			return headers;
		},
	}),
	endpoints(builder) {
		return {
			fetchDays: builder.query<Day[], Space>({
				query: (space: Space) => ({
					url: `/${space.id}/days`,
					method: "GET",
				}),
			}),

			setDay: builder.mutation({
				query: (space) => ({
					url: `/${space.id}/days/create`,
					method: "POST",
					body: space,
				}),
			}),

			updateDay: builder.mutation({
				query: ({ space, day }) => ({
					url: `/${space.id}/days/${day.id}/update`,
					method: "PATCH",
					body: space,
				}),
			}),
		};
	},
});

export const { useFetchDaysQuery, useSetDayMutation, useUpdateDayMutation } = daysApiSlice;
