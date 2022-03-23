import { configureStore } from "@reduxjs/toolkit"
import sliceName from "./slices/sliceName"

export const store = configureStore({
  reducer: {
    reducerName: sliceName,
  },
})
