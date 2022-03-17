import { createSlice } from "@reduxjs/toolkit"

export const registrationTypesSlice = createSlice({
  name: "registrationType",
  initialState: {
    regType: "",
  },
  reducers: {
    changeRegType: (state, action) => {
      state.regType = action.payload
    },
  },
})

export const { changeRegType } = registrationTypesSlice.actions
export default registrationTypesSlice.reducer
