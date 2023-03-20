import { useAppSelector } from "../hooks";
import { RootState } from "../store";

const selectStudentId = (state: RootState) => state.student.studentId;
export const readStudentId = useAppSelector(selectStudentId);

