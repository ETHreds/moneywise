<template>
  <div class="q-pa-md">
    <q-card class="my-card" flat bordered>
      <q-card-section>
        <div class="text-h5 text-weight-bold">Account Balance</div>
        <div class="flex text-weight-light">
          <p>2 June 2024</p>
          <q-space />
          <p> All Accounts</p>
        </div>
      </q-card-section>

      <q-tabs v-model="tab" class="text-teal">
        <q-tab label="Cash" name="one" />
        <q-tab label="Mpesa" name="two" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="one" class="text-h4 text-weight-bold">
          20000
        </q-tab-panel>

        <q-tab-panel name="two" class="text-h4 text-weight-bold">
          300000
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      tab: ref('one')
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%

</style>
