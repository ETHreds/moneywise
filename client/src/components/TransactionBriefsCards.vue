<template>
  <div class="q-pa-md" align="left">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="amber"
      navigation
      padding
      arrows
      height="auto"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-item
            clickable
            v-ripple
            class="rounded-borders col-4"
          >
            <q-item-section avatar>
              <q-avatar rounded>
                <img src="https://cdn.quasar.dev/img/chaosmonkey.png">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>
                Ganglia
              </q-item-label>
              <q-item-label caption>
                <q-badge color="yellow-6" text-color="black">
                  3
                  <q-icon
                    name="warning"
                    size="14px"
                    class="q-ml-xs"
                  />
                </q-badge>
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <span>2 min ago</span>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            class="rounded-borders col-4"
          >
            <q-item-section avatar>
              <q-avatar rounded>
                <img src="https://cdn.quasar.dev/img/chaosmonkey.png">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>
                Ganglia
              </q-item-label>
              <q-item-label caption>
                <q-badge color="yellow-6" text-color="black">
                  3
                  <q-icon
                    name="warning"
                    size="14px"
                    class="q-ml-xs"
                  />
                </q-badge>
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <span>2 min ago</span>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            class="rounded-borders col-4"
          >
            <q-item-section avatar>
              <q-avatar rounded>
                <img src="https://cdn.quasar.dev/img/chaosmonkey.png">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>
                Ganglia
              </q-item-label>
              <q-item-label caption>
                <q-badge color="yellow-6" text-color="black">
                  3
                  <q-icon
                    name="warning"
                    size="14px"
                    class="q-ml-xs"
                  />
                </q-badge>
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <span>2 min ago</span>
            </q-item-section>
          </q-item>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const slide = ref(1)

</script>
