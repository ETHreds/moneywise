<template>
  <div class="q-ma-md col-3">
    <q-item clickable v-ripple class="rounded-borders" :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'">
      <q-item-section avatar>
        <q-avatar rounded color="red" text-color="white" icon="home" />
      </q-item-section>

      <q-item-section>
        <q-item-label>
          Rent
        </q-item-label>
        <q-item-label caption>
          <q-badge color="accent" text-color="black">
            Important
            <q-icon name="warning" size="14px" class="q-ml-xs" />
          </q-badge>
        </q-item-label>
      </q-item-section>

      <q-item-section side>
        <span>2 days</span>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      onClick() {
        // console.log('Clicked on a QChip')
      }
    }
  }
}
</script>
