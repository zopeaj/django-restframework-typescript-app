import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, StudentState, StudentCreate, StudentUpdate, StudentDelete } from "./student.state";
import { createStudentThunk, updateStudentThunk, deleteStudentThunk } from "./student.asyncthunk";

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {

  },
  extraReducer: (builder: any) => {
    builder
      .addCase(createStudentThunk.pending, (state: StudentState , action: PayloadAction<StudentCreate>) => {

      })
      .addCase(createStudentThunk.fulfilled, (state: StudentState, action: PayloadAction<StudentCreate>) => {

      })
      .addCase(createStudentThunk.rejected, (state: StudentState, action: PayloadAction<StudentCreate>) => {

      })
    builder
      .addCase(updateStudentThunk.pending, (state: StudentState, action: PayloadAction<StudentUpdate>) => {

      })
      .addCase(updateStudentThunk.fulfilled, (state: StudentState, action: PayloadAction<StudentUpdate>) => {

      })
      .addCase(updateStudentThunk.rejected, (state: StudentState, action: PayloadAction<StudentUpdate>) => {

      })
    builder
      .addCase(deleteStudentThunk.pending, (state: StudentState, action: PayloadAction<StudentDelete>) => {

      })
      .addCase(deleteStudentThunk.fulfilled, (state: StudentState, action: PayloadAction<StudentDelete>) => {

      })
      .addCase(deleteStudentThunk.rejected, (state: StudentState, action: PayloadAction<StudentDelete>) => {

      })
  }
});


export default studentSlice.reducer;
