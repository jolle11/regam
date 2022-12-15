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
	tagTypes: ["Days"],
	endpoints(builder) {
		return {
			fetchDays: builder.query<Day[], Space>({
				query: (space: Space) => ({
					url: `/${space.id}/days`,
					method: "GET",
				}),
				providesTags: ["Days"],
			}),

			setDay: builder.mutation({
				query: ({ space, date, water, fertilizer, transplant, comment }) => ({
					url: `/${space}/days/create`,
					method: "POST",
					body: { date, water, fertilizer, transplant, comment },
				}),
				invalidatesTags: ["Days"],
			}),

			updateDay: builder.mutation<{}, Day>({
				query: ({ space, id, water, fertilizer, transplant, comment }) => ({
					url: `/${space}/days/${id}/update`,
					method: "PATCH",
					body: { water, fertilizer, transplant, comment },
				}),
				invalidatesTags: ["Days"],
			}),

			deleteDay: builder.mutation<{}, string[]>({
				query: ([space, id]) => ({
					url: `/${space}/days/${id}/delete`,
					method: "DELETE",
					body: { space, id },
				}),
				invalidatesTags: ["Days"],
			}),
		};
	},
});

// rome-ignore format: I want them in a pile
export const {
	useFetchDaysQuery,
	useSetDayMutation,
	useUpdateDayMutation,
	useDeleteDayMutation
} = daysApiSlice;
