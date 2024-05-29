<template>
  <div class="">

    <q-carousel v-model="slide" swipeable animated navigation-position="bottom" navigation padding fullscreen
      class="bg-purple text-white rounded-borders">
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="style" size="56px" />
        <div class="q-mt-md text-center">
          <div class="slide">
            <div class="text-h3 q-mb-md">Welcome to Moneywise!</div>
            <div class="text-subtitle1 q-mb-lg">Your Personal Finance Companion</div>
            <q-btn color="primary" to="/home" label="Get Started" />
          </div>


        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" size="56px" />
        <div class="q-mt-md text-center">
          <div class="slide">
            <div class="text-h4 q-mb-md">Manage Your Finances Effortlessly</div>
            <div class="q-mb-lg">
              <q-btn color="primary" to="/home" label="Get Started" />
            </div>
          </div>

        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" size="56px" />
        <div class="q-mt-md text-center">

          <div class="slide">
            <div class="text-h4 q-mb-md">Stay on Top of Your Finances</div>
            <div class="q-mb-lg">
              <q-btn color="primary" to="/home" label="Get Started" />
            </div>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="terrain" size="56px" />
        <div class="q-mt-md text-center">
          <div class="slide">
            <div class="text-h4 q-mb-md">Achieve Your Dreams</div>
            <div class="q-mb-lg">
              <q-btn color="primary" to="/home" label="Get Started" />
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>
