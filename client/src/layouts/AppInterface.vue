<template>
  <q-layout view="hHh Lpr lff" container style="height: 100dvh" class="shadow-2 rounded-borders">
    <q-header bordered class="bg-secondary text-white">
      <q-toolbar>
        <q-avatar size="40px" class="absolute-center">
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
        </q-avatar>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :mini="!drawer || miniState" @click.capture="drawerClick" :width="200"
      gt="md" bordered :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list padding>
          <q-item to="/user" clickable exact v-ripple>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section>
              Home
            </q-item-section>
          </q-item>
          <q-item to="user/accounts" clickable exact v-ripple>
            <q-item-section avatar>
              <q-icon name="badge" />
            </q-item-section>

            <q-item-section>
              Accounts
            </q-item-section>
          </q-item>
          <q-item @click="open" class="text-accent" clickable exact v-ripple>
            <q-item-section avatar>
              <q-icon name="assignment" />
            </q-item-section>

            <q-item-section>
              Transactions
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <!--
          in this case, we use a button (can be anything)
          so that user can switch back
          to mini-mode
        -->
      <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
        <q-btn dense round unelevated color="accent" icon="chevron_left" @click="miniState = true" />
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-secondary text-white lt-md">

      <q-tabs switch-indicator>
        <q-route-tab icon="home" to="/home" replace label="Home" />
        <q-route-tab icon="badge" to="user/accounts" replace label="Accounts" />
        <q-route-tab icon="assignment" replace label=" Add Transactions" @click="open" />
      </q-tabs>
      <q-dialog v-model="dialog" position="bottom">
        <q-card style="width: 80%">
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
                <q-select v-model="transaction.category_id" :options="categoryOptions" label="Category" outlined
                  clearable />
                <q-select v-model="transaction.account_id" :options="accountOptions" label="Account" outlined
                  clearable />

                <q-card-actions align="right">
                  <q-btn label="Add Transaction" type="submit" color="primary" />
                </q-card-actions>
              </q-form>
            </q-card-section>
          </q-card>
        </q-card>
      </q-dialog>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref, reactive } from 'vue'
import TransactionComponent from '../components/TransactionComponent.vue'

export default {
  setup() {
    const miniState = ref(false)
    const dialog = ref(false)
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



    return {

      submitForm() {
        console.log('Transaction data:', transaction);
        resetForm();
      },
      resetForm() {
        transaction.type = '';
        transaction.counterparty = '';
        transaction.amount = '';
        transaction.description = '';
        transaction.nextPayment = '';
        transaction.category_id = '';
        transaction.account_id = '';
      },
      drawer: ref(false),
      miniState,
      dialog,
      transaction,
      accountOptions,
      typeOptions,
      categoryOptions,
      open() {
        dialog.value = !dialog.value
      }
      ,

      drawerClick(e) {
        // if in "mini" state and user
        // click on drawer, we switch it to "normal" mode
        if (miniState.value) {
          miniState.value = false

          // notice we have registered an event with capture flag;
          // we need to stop further propagation as this click is
          // intended for switching drawer to "normal" mode only
          e.stopPropagation()
        }
      }
    }
  }
}
</script>
