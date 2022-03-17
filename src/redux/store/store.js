import { configureStore } from "@reduxjs/toolkit"
import registrationTypesSlice from "./registrationTypesSlice"

export const store = configureStore({
  reducer: {
    regTypes: registrationTypesSlice,
  },
})
