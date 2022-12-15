import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Day, Space, User } from "../../ts";

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
	tagTypes: ["Space", "Spaces"],
	endpoints(builder) {
		return {
			fetchSpaces: builder.query<Space[], object>({
				query: () => "/",
				providesTags: ["Spaces"],
			}),
			fetchSpace: builder.query({
				query: (space: Space) => ({
					url: `/${space.id}`,
					method: "GET",
				}),
				providesTags: ["Space"],
			}),
			setSpace: builder.mutation({
				query: (space: string) => ({
					url: "/create",
					method: "POST",
					body: space,
				}),
				invalidatesTags: ["Spaces"],
			}),
			updateSpace: builder.mutation({
				query: (space) => ({
					url: `/${space.id}/update`,
					method: "PATCH",
					body: space,
				}),
				invalidatesTags: ["Spaces"],
			}),
			deleteSpace: builder.mutation({
				query: (space) => ({
					url: `/${space.id}/delete`,
					method: "DELETE",
					body: space,
				}),
				invalidatesTags: ["Spaces"],
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
