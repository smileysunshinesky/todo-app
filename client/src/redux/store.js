import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});
