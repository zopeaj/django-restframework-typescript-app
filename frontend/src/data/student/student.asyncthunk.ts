import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerStudent, updateStudent, deleteStudent } from "./api/studentAPI";

export const createStudentThunk = createAsyncThunk("student/register", async (data: any) => {
  const response = await registerStudent(data);
  return response;
});

export const updateStudentThunk = createAsyncThunk("student/update", async (data: any, id: number) => {
  const response = await updateStudent(data, id);
  return response;
});

export const deleteStudentThunk = createAsyncThunk("student/delete", async (id: number) => {
  const response = await deleteStudent(id);
  return response;
});

