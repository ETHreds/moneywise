<template>
  <div>
    <h4>Account Summary </h4>
    <q-card class="my-card bg-purple text-white">
      <q-card-section>
        <div class="text-subtitle2">Total Balance</div>
        <div class="text-h6"> {{ accSummary.starting_amount }}</div>
      </q-card-section>

    </q-card>
    <div v-if="accounts.length > 1">
      <div v-for="account in accounts" :key="account.account_type_id">
        <q-card class="my-card">
          <q-card-section class="bg-accent text-white">
            <div class="text-h6">{{ account.provider }}</div>
            <div class="text-subtitle2">{{ account.starting_amount }}</div>
          </q-card-section>

          <q-card-actions align="around">
            <q-btn flat>Edit</q-btn>
            <q-btn flat> Stats </q-btn>
          </q-card-actions>
        </q-card>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useAccountStore } from '../stores/accounts.store'

const route = useRoute();

const account_type_id = parseInt(route.params.accountId);


const accountStore = useAccountStore();

const [accSummary] = accountStore.calculateAccountTotal().filter(account => account.account_type_id === account_type_id)
const accounts = accountStore.userAccounts.filter(account => account.account_type_id === account_type_id)
</script>

<style lang="scss" scoped></style>
