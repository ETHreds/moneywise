import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from '../boot/axios';

export const useUserStore = defineStore('user', () => {
  const responseMessage = ref('');
  const isAuthenticated = ref(false);
  const user = ref(null);
  const token = ref('')

  async function registerWithEmail(credentials) {
    try {
      const response = await api.post('/users', credentials);
      responseMessage.value = response.data.message;
    } catch (error) {
      responseMessage.value = 'Error sending data';
    }
  }
  async function loginWithEmail(user) {
    try {
      const response = await api.post('/auth', user);
      if (response.data) {
        responseMessage.value = response.data.message;
        setUser(response.data.user, response.data.token)
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


  return {
    responseMessage,
    token,
    user,
    isAuthenticated,
    registerWithEmail,
    loginWithEmail,
    setUser
  };
});

