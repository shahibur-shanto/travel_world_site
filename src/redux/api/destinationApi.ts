import { IDestination, IMeta } from "@/types";
import { baseApi } from "./baseApi";

const BASE_DESTINATION_API_URL = "/destination";

export const destinationApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		// get all faculty user endpoint
		destinations: build.query({
			query: (arg: Record<string, any>) => {
				return {
					url: "/destinations",
					method: "GET",
					params: arg,
				};
			},
			transformResponse: (response: IDestination[], meta: IMeta) => {
				return {
					destination: response,
					meta,
				};
			},
			// providesTags: ['destination'],
		}),
		// // get single faculty user endpoint
		// faculty: build.query({
		// 	query: (id: string | string[] | undefined) => ({
		// 		url: `${BASE_FACULTY_API_URL}/profile/${id}`,
		// 		method: "GET",
		// 	}),
		// 	providesTags: [tagTypes.faculty],
		// }),
		// create faculty user endpoint
		addDestinationWithFormData: build.mutation({
			query: (data) => {
				console.log(data);
				return {
					url: `${BASE_DESTINATION_API_URL}/image-upload`,
					method: "POST",
					data: data.values,
					contentType: "multipart/form-data",
				};
			},

			// invalidatesTags: ['destination'],
		}),
		// // update faculty user endpoint
		// updateFaculty: build.mutation({
		// 	query: (data) => ({
		// 		url: `${BASE_FACULTY_API_URL}/${data.id}`,
		// 		method: "PATCH",
		// 		data: data.body,
		// 	}),
		// 	invalidatesTags: [tagTypes.faculty],
		// }),
		// // delete faculty user endpoint
		// deleteFaculty: build.mutation({
		// 	query: (id) => ({
		// 		url: `${BASE_FACULTY_API_URL}/${id}`,
		// 		method: "DELETE",
		// 	}),
		// 	invalidatesTags: [tagTypes.faculty],
		// }),

		// facultyCourses: build.query({
		// 	query: (arg: Record<string, any>) => {
		// 		return {
		// 			url: `${BASE_FACULTY_API_URL}/my-courses`,
		// 			method: "GET",
		// 			params: arg,
		// 		};
		// 	},
		// 	transformResponse: (response: IFacultyCourse[], meta: IMeta) => {
		// 		return {
		// 			myCourses: response,
		// 			meta,
		// 		};
		// 	},
		// 	providesTags: [tagTypes.student],
		// }),

		// facultyCourseStudents: build.query({
		// 	query: (arg: Record<string, any>) => {
		// 		return {
		// 			url: `${BASE_FACULTY_API_URL}/my-course-students`,
		// 			method: "GET",
		// 			params: arg,
		// 		};
		// 	},
		// 	transformResponse: (response: ICoreFaculty[], meta: IMeta) => {
		// 		return {
		// 			myCourseStudents: response,
		// 			meta,
		// 		};
		// 	},
		// 	providesTags: [tagTypes.student],
		// }),
	}),
});

export const {
	useAddDestinationWithFormDataMutation, // create faculty user hook
	useDestinationsQuery,
	// useFacultiesQuery, // get all faculty users hook
	// useFacultyQuery, // get single faculty user hook
	// useUpdateFacultyMutation, // update single faculty user hook
	// useDeleteFacultyMutation, // delete single faculty user hook

	// useFacultyCoursesQuery,
	// useFacultyCourseStudentsQuery,
} = destinationApi;
