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

export const spacesApiSlice = createApi({
	reducerPath: "spacesApi",
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
			fetchSpaces: builder.query<Space[], object>({
				query: () => "/",
			}),
			fetchSpace: builder.mutation({
				query: (space) => ({
					url: `/${space.id}`,
					method: "GET",
				}),
			}),
			setSpace: builder.mutation({
				query: (space) => ({
					url: "/create",
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
	useSetSpaceMutation,
	useUpdateSpaceMutation,
	useDeleteSpaceMutation,
} = spacesApiSlice;
