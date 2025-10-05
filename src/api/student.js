// src/api/student.js
import api from './axiosInstance';

export async function registerStudent(payload) {
  const { data } = await api.post('/private/student/register', payload);
  return data;
}

export async function getStudentDetail(id) {
  const { data } = await api.get(`/private/student/${id}`);
  return data;
}

export async function getStudentAttendance(studentId, start, end) {
  const params = {};
  if (start) params.start = typeof start === 'string' ? start : start.toISOString().split('T')[0];
  if (end) params.end = typeof end === 'string' ? end : end.toISOString().split('T')[0];
  const { data } = await api.get(`/private/student/attendance/${studentId}`, { params });
  return data;
}

export async function postLectureGetAttendance(dto) {
  const { data } = await api.post('/private/student/lecture/get-attendance', dto);
  return data;
}

export default { registerStudent, getStudentDetail, getStudentAttendance, postLectureGetAttendance };
