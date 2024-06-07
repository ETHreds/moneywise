<template>
  <div class="q-pa-md" style="width: 80%">


    <q-card v-for="account in accounts" :key="account.id" flat bordered class="my-card">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-subtitle2">{{ formatAccountType(account.account_type['account_type']) }} Balance
              <span><q-toggle v-model="value" label="Show Balance" /></span>
            </div>
            <div class="text-h5" v-if="value">{{ account.starting_amount }}</div>
            <div class="text-h5" v-else>****</div>
          </div>

          <div class="col-auto">
            <q-chip outline clickable @click="console.log('clicked')" color="teal" text-color="white"
              icon="manage_accounts">
              Manage
            </q-chip>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <q-card class="my-card q-my-xl" flat bordered style="max-width: 350px;">
      <div class="text-h6 q-mx-md">Quick Actions</div>
      <q-separator dark />
      <q-card-actions>
        <div class="row">
          <div align="center" class="q-mx-md text-caption">
            <q-btn outline round color="negative" icon="card_giftcard" />
            <p class="text-caption text-weight-light"> Add Account</p>
          </div>
          <div align="center" class="q-mx-md">
            <q-btn outline round color="accent" icon="card_giftcard" />
            <p class="text-caption text-weight-light"> Manage Limits</p>
          </div>
          <div align="center" class="q-mx-md">
            <q-btn outline round color="accent" icon="card_giftcard" />
            <p class="text-caption text-weight-light"> Statistics</p>
          </div>
        </div>
      </q-card-actions>
    </q-card>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useAccountStore } from '../stores/accounts.store';

const value = ref(false)
const amount = ref(25000)
const accounts = ref(null)

const accountStore = useAccountStore();
onMounted(async () => {
  await accountStore.fetchUserAccounts();
  accounts.value = await accountStore.calculateAccountTotal();
});

const formatAccountType = (accountType) => {
  let formattedAccountType = accountType.replace(/_/g, ' ');
  formattedAccountType = formattedAccountType.replace(/\b\w/g, (char) => char.toUpperCase());
  return formattedAccountType;
};

console.log(accountStore.userAccounts, 'hello')
</script>

<style lang="scss" scoped></style>
