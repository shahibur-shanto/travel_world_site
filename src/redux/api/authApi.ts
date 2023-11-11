import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		userLogin: build.mutation({
			query: (loginData) => ({
				url: "/auth/signin",
				method: "POST",
				data: loginData,
			}),
			invalidatesTags: ["user"],
		}),
		// destinations: build.query({
		// 	query: () => ({
		// 		url: "/destinations",
		// 		method: "GET",
		// 	}),
		// }),
	}),
});

export const { useUserLoginMutation } = authApi;
