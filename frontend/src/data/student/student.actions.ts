import React from "react";
import { createStudentThunk, updateStudentThunk, deleteStudentThunk } from "./student.asyncthunk";
import { AppThunk } from "../store";


export const registerStudentAction = (data: any): AppThunk => (dispatch: React.Dispatch<any>) => {
  dispatch(createStudentThunk(data));
}

export const updateStudentAction = (data: any, id: number): AppThunk => (dispatch: React.Dispatch<any>) => {
  dispatch(updateStudentAction(data, id));
}

export const deleteStudentAction = (id: number): AppThunk => (dispatch: React.Dispatch<any>) => {
  dispatch(deleteStudentThunk(id));
}

