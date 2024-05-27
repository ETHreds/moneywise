<template>
  <div align="center">
  <div class="q-pa-md">
    <q-section class="my-card" flat bordered>
      <q-card-section>
        <div class="text-h6">Account Balance</div>
      </q-card-section>

      <q-tabs v-model="tab" class="text-teal">
        <q-tab label="Cash" name="one" />
        <q-tab label="Mobile Money" name="two" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="one">
          <q-card class="my-card">
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="col">
                  <div class="text-h6">20,000</div>
                </div>

                <div class="col-auto">
                  <q-btn color="grey-7" round flat icon="more_vert">
                  </q-btn>
                </div>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-actions align="right">
              <q-btn flat bordered>View Analytics</q-btn>
            </q-card-actions>
          </q-card>
        </q-tab-panel>
        <q-tab-panel name="two">
          <q-card class="my-card">
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="col">
                  <div class="text-h6">100,000</div>
                </div>

                <div class="col-auto">
                  <q-btn color="grey-7" round flat icon="more_vert">
                  </q-btn>
                </div>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-actions align="right">
              <q-btn flat bordered>View Analytics</q-btn>
            </q-card-actions>
          </q-card>
        </q-tab-panel>
      </q-tab-panels>
    </q-section>
    <!-- Section 2 -->
    <q-section>
        <div class="q-pa-md ">
          <q-btn-dropdown
            v-model="menu"
            outline rounded
            label="Transact"
            class="q-ma-md"

          >
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Income</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="info" color="amber" />
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Expense</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="info" color="amber" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn outline rounded
          class="q-ma-md"
          label="Transfer" />
        </div>
    </q-section>
    <!-- Recent Transactions -->
    <q-section>
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-h6"> Recent Transactions</div>
            </div>

            <div class="col-auto">
              <q-btn flat>
                View all
              </q-btn>
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <TransactionBriefsCards/>
        </q-card-section>
      </q-card>
    </q-section>
    <q-section>
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-h6"> Upcoming Payments</div>
            </div>

            <div class="col-auto">
              <q-btn flat>
                View all
              </q-btn>
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <TransactionBriefsCards/>
        </q-card-section>
      </q-card>
    </q-section>
  </div>
</div>
</template>

<script setup >
import { ref } from 'vue'
import TransactionBriefsCards from '../components/TransactionBriefsCards.vue'

const tab = ref('one')
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>

<!-- <script setup>
defineOptions({
  name: 'IndexPage'
})
</script> -->
