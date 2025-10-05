// src/api/attendance.js
import api from './axiosInstance';

export async function getDivisionAttendance(divisionId) {
  const { data } = await api.get(`/private/attendance/division/${divisionId}`);
  return data;
}

export async function getStudentAttendanceSummary(studentId) {
  const { data } = await api.get(`/private/attendance/student/${studentId}`);
  return data;
}

export default { getDivisionAttendance, getStudentAttendanceSummary };
