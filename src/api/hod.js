// src/api/hod.js
import api from './axiosInstance';

export async function createSessionId(payload) {
  const { data } = await api.post('/private/hod/session-id/create', payload);
  return data;
}

export async function createDivision(payload) {
  const { data } = await api.post('/private/hod/division/create', payload);
  return data;
}

export async function getDivisionsInDepartment(departmentId) {
  const { data } = await api.get(`/private/hod/division/${departmentId}`);
  return data;
}

export async function createDepartment(payload) {
  const { data } = await api.post('/private/hod/department/create', payload);
  return data;
}

export async function getDepartment(departmentId) {
  const { data } = await api.get(`/private/hod/department/${departmentId}`);
  return data;
}

export default { createSessionId, createDivision, getDivisionsInDepartment, createDepartment, getDepartment };
