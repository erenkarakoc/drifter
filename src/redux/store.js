import { configureStore } from "@reduxjs/toolkit"
import registrationTypesSlice from "./slices/registrationTypesSlice"

export const store = configureStore({
  reducer: {
    regTypes: registrationTypesSlice,
  },
})
