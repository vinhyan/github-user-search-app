import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import darkModeReducer from './features/darkModeSlice';

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["search/loadSearchUsers/fulfilled"],
      },
    }),
  reducer: {
    search: searchReducer,
    darkMode: darkModeReducer,
    
  },
});
