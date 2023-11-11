import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./rootReducer";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
	reducer,

	// middleware: (getDefaultMiddleware) =>
	// 	process.env.NODE_ENV === "development"
	// 		? getDefaultMiddleware({
	// 				serializableCheck: false, // Disable the middleware in development mode
	// 		  })
	// 		: getDefaultMiddleware().concat(baseApi.middleware),

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
