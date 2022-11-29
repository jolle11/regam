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

interface User {
	_id: string;
	name: string;
	email: string;
	token: string;
}

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:5001/api/spaces",
		prepareHeaders: (headers) => {
			const user: User = JSON.parse(localStorage.getItem("user") || "{}");
			console.log(user);
			if (user) {
				headers.set("authorization", `Bearer ${user.token}`);
			}
			return headers;
		},
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
				query: (space) => ({
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
			deleteSpace: builder.mutation({
				query: (space) => ({
					url: `/${space.id}`,
					method: "DELETE",
					body: space,
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
	useDeleteSpaceMutation,
} = apiSlice;
