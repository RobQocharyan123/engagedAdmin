import { createSlice } from '@reduxjs/toolkit';

import { getTableDataThunk } from '../Middleware/generalDatathunk';

const initialState = {
  tableData: [],
  loading: false,
};

const generalTableDtaSlice = createSlice({
  name: 'generalTableData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTableDataThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTableDataThunk.fulfilled, (state, action) => {
        state.tableData = action.payload;
        state.loading = false;
      });
  },
});

export const {} = generalTableDtaSlice.actions;
export default generalTableDtaSlice.reducer;
