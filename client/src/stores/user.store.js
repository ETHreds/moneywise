import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from '../boot/axios';
import jwtDecode from '../boot/jwtDecode';

export const useUserStore = defineStore('user', () => {
  const responseMessage = ref('');
  const isAuthenticated = ref(false);
  const user = ref(null);
  const token = ref(localStorage.getItem('token') || '');

  async function registerWithEmail(userData) {
    try {
      const response = await api.post('/users', userData);
      user.value = response.data;
      responseMessage.value = null;
    } catch (error) {
      responseMessage.value = error.response?.data?.message || 'Registration failed';
    }
  }

  async function loginWithEmail(credentials) {
    try {
      const response = await api.post('/auth', credentials);
      if (response.data) {
        responseMessage.value = response.data.message;
        setUser(response.data.user, response.data.token);
      }
    } catch (error) {
      responseMessage.value = 'Invalid Email/Password';
    }
  }

  function setUser(userData, authToken) {
    user.value = userData;
    token.value = authToken;
    isAuthenticated.value = true;
    localStorage.setItem('token', authToken);
    const decodedToken = jwtDecode(authToken);
    localStorage.setItem('tokenExpiration', decodedToken.exp * 1000); // Convert to milliseconds
  }

  function checkTokenExpiry() {
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    if (tokenExpiration && Date.now() > tokenExpiration) {
      isAuthenticated.value = false;
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiration');
    }
  }

  function logout() {
    user.value = null;
    token.value = '';
    isAuthenticated.value = false;
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
  }
  async function refreshToken() {
    try {
      const response = await api.post('auth/refresh-token');
      if (response.data) {
        setUser(user.value, response.data.token);
      }
    } catch (error) {
      responseMessage.value = 'Failed to refresh token';
    }
  }
  // Check token expiry on application load
  checkTokenExpiry();

  return {
    responseMessage,
    token,
    user,
    isAuthenticated,
    loginWithEmail,
    setUser,
    registerWithEmail,
    logout,
  };
});
