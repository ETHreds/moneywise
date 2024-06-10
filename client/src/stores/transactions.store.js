import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from '../boot/axios';

import { useUserStore } from "./user.store";
import { useAccountStore } from "./accounts.store";
export const useTransactionsStore = defineStore('transactions', () => {

  const userTransactions = ref([])
  const mess = ref(null)

  async function fetchTransactions() {
    try {
      const response = await api.get('/transactions');
      userTransactions.value = response.data;
    } catch (error) {
      mess.value = error.message || 'Failed to fetch transactions';
    }
  }
  async function addTransaction(transactionData) {
    try {
      const response = await api.post('/transactions', transactionData);
      userTransactions.value.push(response.data);
    } catch (error) {
      mess.value = error.message || 'Failed to add transaction';
    }
  }
  async function deleteTransaction(transactionId) {
    try {
      await api.delete(`/transactions/${transactionId}`);
      userTransactions.value = userTransactions.value.filter(
        (transaction) => transaction.id !== transactionId
      );
    } catch (error) {
      mess.value = error.message || 'Failed to delete transaction';
    }
  }
  return {
    addTransaction,
    fetchTransactions,
    deleteTransaction
  }
});

