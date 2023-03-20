export interface IStudentProfile {
  studentId: number;
  name: string;
  age: number;
  email: string;
  lastname: string;
  firstname: string;
}

export interface IStudentProfileUpdate {
   name: string;
   email: string;
   lastname: string;
   firstname: string;
}

export interface IStudentProfileCreate {
    name: string;
    age: number;
    email: string;
    lastname: string;
    firstname: string;
}
