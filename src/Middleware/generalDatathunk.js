import { createAsyncThunk } from '@reduxjs/toolkit';
import { getGeneralTable } from '../Services/generalTableService';

export const getTableDataThunk = createAsyncThunk(
  'get/generalTableDate',
  async ({ data }) => {
    try {
      const res = await getGeneralTable({ data });
      return res;
    } catch (error) {
      console.error(error);
      return {};
    }
  }
);
