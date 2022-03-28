import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    phone: "",
    country: "SE",
  },
  reducers: {
    setPhone: (state, action) => {
      state.phone = action.payload
    },
    setCountry: (state, action) => {
      state.country = action.payload
    },
  },
})

export const { setPhone, setCountry } = userSlice.actions
export default userSlice.reducer
