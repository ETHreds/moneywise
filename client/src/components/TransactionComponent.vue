<!-- <template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Add Transaction</div>
    </q-card-section>

    <q-card-section>
      <q-form @submit="submitForm">
        <q-select v-model="transaction.type" :options="typeOptions" label="Type" outlined clearable />
        <q-input v-model="transaction.counterparty" label="Counterparty" outlined clearable />
        <q-input v-model="transaction.amount" label="Amount" type="number" outlined clearable />
        <q-input v-model="transaction.description" label="Description" outlined clearable />
        <q-input v-model="transaction.nextPayment" label="Next Payment" type="date" outlined clearable />
        <q-select v-model="transaction.category_id" :options="categoryOptions" label="Category" outlined clearable />
        <q-select v-model="transaction.account_id" :options="accountOptions" label="Account" outlined clearable />

        <q-card-actions align="right">
          <q-btn label="Cancel" color="negative" @click="resetForm" />
          <q-btn label="Add Transaction" type="submit" color="primary" />
        </q-card-actions>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, reactive } from 'vue';

const transaction = reactive({
  type: '',
  counterparty: '',
  amount: '',
  description: '',
  nextPayment: '',
  category_id: '',
  account_id: '',
});

const typeOptions = ref([
  { label: 'Income', value: 'income' },
  { label: 'Expense', value: 'expense' },
]);

const categoryOptions = ref([
  // Populate with actual category data
  { label: 'Food', value: 1 },
  { label: 'Rent', value: 2 },
]);

const accountOptions = ref([
  // Populate with actual account data
  { label: 'Checking Account', value: 1 },
  { label: 'Savings Account', value: 2 },
]);

const submitForm = () => {
  console.log('Transaction data:', transaction);
  resetForm();
};

const resetForm = () => {
  transaction.type = '';
  transaction.counterparty = '';
  transaction.amount = '';
  transaction.description = '';
  transaction.nextPayment = '';
  transaction.category_id = '';
  transaction.account_id = '';
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style> -->


<template>
  <div>
    <h4>Add Transaction</h4>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
