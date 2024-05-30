<template>
  <div>
    <slot-card>
      <template v-slot:title>Cash Wallet</template>
      <template v-slot:content>20000</template>
    </slot-card>
    <slot-card>
      <template v-slot:title>Transacting Accounts</template>
      <template v-slot:content>
        <div class="flex">
          <clickable-chip />
        </div>
      </template>
    </slot-card>
    <slot-card>
      <template v-slot:title>Bank Accounts</template>
      <template v-slot:content>
        <!-- TO DO CAROUSSEL -->
        <bank-card></bank-card>
      </template>
    </slot-card>
    <slot-card>
      <template v-slot:title>Saving Accounts</template>
      <template v-slot:content>
        <!-- TO DO CAROUSSEL -->
        Savings /GOals md ets
      </template>
    </slot-card>
    <slot-card>
      <template v-slot:title>Loan Accounts</template>
      <template v-slot:content>
        <!-- TO DO CAROUSSEL -->
        <bank-card></bank-card>
      </template>
    </slot-card>
  </div>
</template>

<script setup>
import BankCard from "../components/BankCard.vue";
import ClickableChip from "../components/ClickableChip.vue";
import SlotCard from "../components/SlotCard.vue";
</script>

<style lang="scss" scoped></style>
