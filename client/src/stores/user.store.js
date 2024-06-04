// src/stores/user.store.js
import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from '../boot/axios';

export const useUserStore = defineStore('user', () => {
  const responseMessage = ref('');

  async function createWithEmail(user) {
    try {
      const response = await api.post('/users', user);
      responseMessage.value = response.data.message;
    } catch (error) {
      responseMessage.value = 'Error sending data';
    }
  }

  return {
    responseMessage,
    createWithEmail
  };
});

