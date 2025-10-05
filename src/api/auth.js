import api from './axiosInstance';

// Match your fetch() behavior — plain login without credentials
export async function login(email, password, authority = 'STUDENT') {
  try {
    const payload = { email, password, authority };
    const response = await api.post('/public/login', payload);

    // Check HTTP status
    if (response.status !== 200) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = response.data;
    console.log('✅ Login success:', data);

    // Save tokens if present
    if (data?.token || data?.accessToken) {
      const token = data.token || data.accessToken;
      localStorage.setItem('token', token);
      if (data.refreshToken) localStorage.setItem('refreshToken', data.refreshToken);
      if (data.sessionType) localStorage.setItem('sessionType', data.sessionType);
      if (data.uuid) localStorage.setItem('id', data.uuid);
    }

    return data;
  } catch (error) {
    console.error('❌ Login failed:', error);
    throw error;
  }
}

export async function register(payload) {
  try {
    const response = await api.post('/public/new', payload);
    return response.data;
  } catch (error) {
    console.error('❌ Registration failed:', error);
    throw error;
  }
}

export async function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  window.location.href = '/login';
}

export default { login, register, logout };
