import { configureStore } from "@reduxjs/toolkit";
import wishesSlice from "./wishesSlice";

export default configureStore({
  reducer: {
    wishes: wishesSlice,
  },
});
