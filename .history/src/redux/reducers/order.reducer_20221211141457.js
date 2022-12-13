import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: {},
};
const userReducer = createSlice({
  name: "order",
  initialState,
  reducers: {},
});
export default userReducer.reducer;
