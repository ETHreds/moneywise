<template>
  <div>
    <slot-card>
      <template v-slot:title>Saving Goals</template>
      <template v-slot:content>
        <!-- to do -->
        Those circles that show percentage
        Individual and group
      </template>
    </slot-card>
    <slot-card>
      <template v-slot:title>Spending Goals</template>
      <template v-slot:content>
        <!-- to do -->
        Create Budget
      </template>
    </slot-card>
  </div>
</template>

<script setup>
import SlotCard from '../components/SlotCard.vue';

</script>

<style lang="scss" scoped></style>
