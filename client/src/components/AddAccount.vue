<template>
  <div class="q-pa-md q-mb-xl" style="max-width: 400px">
    <h6>Add Account</h6>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-select filled v-model="selectedAccountType" use-input hide-selected fill-input input-debounce="0"
        :options="filteredOptions" @filter="filterFn" label="Account Type" hint="Select or add custom"
        style="width: 250px; padding-bottom: 32px">
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>

      <q-input v-if="showCustomAccountType" filled v-model="customAccountType" label="Custom Account Type"
        hint="Enter your custom account type" lazy-rules
        :rules="[val => val && val.length > 0 || 'Please type something']" />

      <q-input filled v-model="provider" label="Provider" hint="ie ABSA Bank, M-PESA, Stima Sacco" lazy-rules
        :rules="[val => val && val.length > 0 || 'Please type something']" :disable="cash" :readonly="cash" />

      <q-input filled type="number" v-model="amount" label="Amount *" lazy-rules :rules="[
        val => val !== null && val !== '' || 'Please type an amount',
        val => val > 0 || 'Amount must be greater than 0'
      ]" />


      <div>
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>

  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref, watch } from 'vue'

const options = ref([
  'Google', 'Cash', 'Twitter', 'Apple', 'Oracle', 'Other'
])
const filteredOptions = ref([...options.value])
const $q = useQuasar()
const cash = ref(false)
const provider = ref(null)
const amount = ref(null)
const accept = ref(false)
const selectedAccountType = ref(null)
const customAccountType = ref(null)
const showCustomAccountType = ref(false)
const noResultsFound = ref(false)

watch(selectedAccountType, (newValue) => {
  if (newValue === 'Other' || noResultsFound.value) {
    showCustomAccountType.value = true
  } else {
    showCustomAccountType.value = false
    customAccountType.value = null
  }
  if (newValue === 'Cash') {
    provider.value = 'My Wallet';
    cash.value = true
  }
  else {
    showCustomAccountType.value = false
    customAccountType.value = null
  }
})

function filterFn(val, update, abort) {
  update(() => {
    const needle = val.toLowerCase()
    filteredOptions.value = options.value.filter(v => v.toLowerCase().indexOf(needle) > -1)

    // Check if no results were found
    noResultsFound.value = filteredOptions.value.length === 0
    if (noResultsFound.value) {
      filteredOptions.value = ['Other']
    }
  })
}

function onSubmit() {
  let finalAccountType = selectedAccountType.value;

  if (selectedAccountType.value === 'Other') {
    finalAccountType = customAccountType.value;
  }

  const formData = {
    account_type: finalAccountType,
    provider: provider.value,
    amount: amount.value,
    accept: accept.value
  };

  console.log('Form data:', formData);

}

</script>

<style scoped>
.q-pa-md {
  max-width: 400px;
}

.q-gutter-md {
  display: flex;
  flex-direction: column;
}

.q-input {
  margin-bottom: 16px;
}
</style>
