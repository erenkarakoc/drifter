import { createSlice } from "@reduxjs/toolkit"

export const sliceName = createSlice({
  name: "sliceName",
  initialState: {
    someState: "",
  },
  reducers: {
    actionName: (state, action) => {
      console.log(state)
      console.log(action)
    },
  },
})

export const { actionName } = sliceName.actions
export default sliceName.reducer
