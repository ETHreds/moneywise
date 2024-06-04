<template>
  <div>
    <q-carousel v-model="slide" swipeable animated navigation-position="bottom" fullscreen navigation padding
      class="bg-primary text-white rounded-borders">
      <!-- <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="style" size="56px" />
        <div class="q-mt-md text-center">
          <div class="text-h3 q-mb-md">Welcome to MoneyWise!</div>
          <div class="text-subtitle1 q-mb-lg">Your Personal Finance Companion</div>
        </div>
      </q-carousel-slide> -->
      <!-- <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" size="56px" />
        <div class="q-mt-md text-center">
          <div class="text-h4 q-mb-md">Track Your Expenses Effortlessly</div>
          <div class="q-mb-lg">
            <p>Log your expenses and income with ease.</p>
            <p>Categorize transactions for better insights.</p>
            <p>Monitor spending habits over time.</p>
          </div>
        </div>
      </q-carousel-slide> -->
      <!-- <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" size="56px" />
        <div class="q-mt-md text-center">
          <div class="text-h4 q-mb-md">Set Budgets and Savings Goals</div>
          <div class="q-mb-lg">
            <p>Allocate funds to different expense categories.</p>
            <p>Define savings goals and track your progress.</p>
            <p>Receive alerts when nearing budget limits.</p>
          </div>
        </div>
      </q-carousel-slide> -->
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="terrain" size="56px" />
        <div class="q-mt-md text-center">
          <div class="text-h4 q-mb-md">Get Started with MoneyWise Today!</div>
          <div class="q-mb-2xlg">
            <p> {{ message }}</p>
          </div>
          <q-btn color="primary" @click="toggleAuthModal" label="Get Started" />
          <!-- Render AuthComponent only if modal is open -->
        </div>
      </q-carousel-slide>
    </q-carousel>
    <q-dialog v-model="showDialog" backdrop-filter="blur(4px) saturate(150%)">
      <auth-component />
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { mapStores } from "pinia";

import useModalStore from '../stores/modal.store'
import AuthComponent from '../components/AuthComponent.vue'


const slide = ref('style');
const showDialog = ref(false)
const { modalStore } = mapStores(useModalStore);


function toggleAuthModal() {
  modalStore.isOpen = !modalStore.isOpen;
  showDialog.value = true
}

</script>

<style lang="scss" scoped>
// Your component styles here</style>
