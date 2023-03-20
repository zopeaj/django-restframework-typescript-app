import { createEntityAdapter } from "@reduxjs/toolkit";


export interface StudentState {
  studentId: number,
  name: string,
  age: number,
  email: string,
  lastname: string,
  firstname: string
}

export interface StudentCreate {

}

export interface StudentUpdate {

}

export interface StudentDelete {

}

export const initialState: StudentState = createEntityAdapter.getInitialState({
  studentId: 0,
  name: 'studentadmin',
  age: 10,
  email: 'studentadmin@example.com',
  lastname: 'student_last',
  firstname: 'student_first'
});

