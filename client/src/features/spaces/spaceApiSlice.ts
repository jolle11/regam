import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:5001/api/spaces",
	}),
	endpoints(builder) {
		return {
			fetchSpaces: builder.query({
				query: () => "/",
			}),
			fetchSpace: builder.mutation({
				query: (space) => ({
					url: `/${space.id}`,
					method: "GET",
					body: space,
				}),
			}),
			fetchDays: builder.mutation({
				query: (space) => ({
					url: `/${space.id}/days`,
					method: "GET",
					body: space,
				}),
			}),
			setSpace: builder.mutation({
				query: (space) => ({
					url: "/create",
					method: "POST",
					body: space,
				}),
			}),
			setDay: builder.mutation({
				query: (space) => ({
					url: `/${space.id}/days/create`,
					method: "POST",
					body: space,
				}),
			}),
			updateSpace: builder.mutation({
				query: ({ space, day }) => ({
					url: `/${space.id}/update`,
					method: "PATCH",
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
			deleteDay: builder.mutation({
				query: ({ id }) => ({
					url: `/${id}`,
					method: "DELETE",
					body: id,
				}),
			}),
		};
	},
});

export const {
	useFetchSpacesQuery,
	useFetchSpaceMutation,
	useFetchDaysMutation,
	useSetSpaceMutation,
	useSetDayMutation,
	useUpdateDayMutation,
	useDeleteDayMutation,
} = apiSlice;
