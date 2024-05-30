<template>
  <div>
    <p class="text-h4 q-pl-md q-pt-md text-weight-medium">Hello, John Doe</p>
    <balance-card />
    <chart-component />
    <slot-card>
      <template v-slot:title>Upcoming Payments</template>
      <template v-slot:content><clickable-chip /></template>
    </slot-card>
    <slot-card>
      <template v-slot:title>Latest Transactions</template>
      <template v-slot:content><clickable-chip /></template>
    </slot-card>

  </div>
</template>

<script setup>
import BalanceCard from "../components/BalanceCard.vue";
import ChartComponent from "../components/ChartComponent.vue";
import ClickableChip from "src/components/ClickableChip.vue";
import SlotCard from "../components/SlotCard.vue";

</script>

<style lang="scss" scoped></style>
