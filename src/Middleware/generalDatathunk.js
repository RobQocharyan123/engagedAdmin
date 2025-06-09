import { createAsyncThunk } from "@reduxjs/toolkit";
import { getGeneralTable } from "../Services/generalTableService";

export const getTableDataThunk = createAsyncThunk(
  "get/generalTableDate",
  async () => {
    try {
      const data = await getGeneralTable();
      return data;
    } catch (error) {
      console.error(error);
      return {};
    }
  }
);