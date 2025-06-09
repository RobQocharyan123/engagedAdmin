import { configureStore } from "@reduxjs/toolkit";
import generalTableDtaSlice from "../Slices/generalDataSlice"

export const store = configureStore({
  reducer: {
   generalTableData:generalTableDtaSlice,
  },
});
