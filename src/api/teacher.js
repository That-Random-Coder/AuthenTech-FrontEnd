// src/api/teacher.js
import api from './axiosInstance';

export async function getAttendanceByCourseAndDivision(courseId, divisionId) {
  const { data } = await api.get(`/private/teacher/course/${courseId}/division/${divisionId}`);
  return data;
}

export async function getTeacherById(id) {
  const { data } = await api.get(`/private/teacher/${id}`);
  return data;
}

export default { getAttendanceByCourseAndDivision, getTeacherById };
