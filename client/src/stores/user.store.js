import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from '../boot/axios';

export const useUserStore = defineStore('user', () => {
  const responseMessage = ref('');
  const isAuthenticated = ref(false);
  const user = ref(null);
  const token = ref(localStorage.getItem('token') || '');

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
  }

  function checkTokenExpiry() {
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    if (tokenExpiration && Date.now() > tokenExpiration) {
      isAuthenticated.value = false;
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiration');
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
    setUser
  };
});
