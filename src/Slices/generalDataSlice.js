import { createSlice } from '@reduxjs/toolkit';

import { getTableDataThunk } from '../Middleware/generalDatathunk';

const initialState = {
  tableData: [],
  loading: false,
  isUpdate: false,
  date:null
};

const generalTableDtaSlice = createSlice({
  name: 'generalTableData',
  initialState,
  reducers: {
    setIsUpdate: (state) => {
      state.isUpdate = !state.isUpdate;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTableDataThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTableDataThunk.fulfilled, (state, action) => {
        state.tableData = action.payload?.votes;
        state.date = action.payload?.date;
        state.loading = false;
      });
  },
});

export const { setIsUpdate } = generalTableDtaSlice.actions;
export default generalTableDtaSlice.reducer;
