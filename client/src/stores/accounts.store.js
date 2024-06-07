import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from '../boot/axios';

import { useUserStore } from "./user.store";
export const useAccountStore = defineStore('accounts', () => {
  const userAccounts = ref([]);

  async function fetchUserAccounts() {
    const userStore = useUserStore();
    const userId = userStore.user.userId;
    try {
      const response = await api.get(`/accounts/${userId}`);
      userAccounts.value = response.data;
      console.log(userAccounts.value, 'store')
    } catch (error) {
      console.error('Error fetching user accounts:', error);
      return null;
    }
  }

  function calculateAccountTotal() {
    const totalStartingAmountsByType = {};

    userAccounts.value.forEach(account => {
      const accountType = account.account_type.account_type;
      const startingAmount = parseFloat(account.starting_amount);

      if (totalStartingAmountsByType.hasOwnProperty(accountType)) {
        totalStartingAmountsByType[accountType] += startingAmount;
      } else {
        totalStartingAmountsByType[accountType] = startingAmount;
      }
    });

    const totalStartingAmountsArray = Object.entries(totalStartingAmountsByType).map(([accountType, totalStartingAmount]) => ({
      account_type: { account_type: accountType },
      starting_amount: totalStartingAmount.toFixed(2)
    }));

    return totalStartingAmountsArray;
  }


  return {
    userAccounts,
    fetchUserAccounts,
    calculateAccountTotal

  };
});

