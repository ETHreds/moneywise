// src/stores/user.store.js
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
      console.log(`User: >>>${JSON.stringify(response.data.user)}`, `Token: >>>${response.data.token},`, `Response Message >>>> ${response.data.message}`);
      if (response.data) {
        responseMessage.value = response.data.message;
        console.log('1')
        setUser(response.data.user, response.data.token)
      }
    } catch (error) {

      responseMessage.value = 'Invalid Email/Password';
    }
  }

  function setUser(userData, authToken) {
    user.value = userData;
    console.log('2')
    token.value = authToken;
    console.log('3')
    isAuthenticated.value = true;
    console.log('4')
    // localStorage.setItem('token', authToken);
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

