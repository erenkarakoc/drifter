import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    phone: "",
    country: "SE",
    SMSCode: "",
  },
  reducers: {
    setPhone: (state, action) => {
      state.phone = action.payload
    },
    setCountry: (state, action) => {
      state.country = action.payload
    },
    setSMSCode: (state, action) => {
      state.SMSCode = action.payload
    },
  },
})

export const { setPhone, setCountry, setSMSCode } = userSlice.actions
export default userSlice.reducer
