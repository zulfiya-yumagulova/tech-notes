import { confugureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice.js";

export const store = confugureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
