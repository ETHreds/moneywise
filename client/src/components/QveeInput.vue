<template>
  <div>
    <q-input v-bind="field" v-model="fieldValue" :label="label" outlined />
    <ErrorMessage :name="name" />
  </div>
</template>

<script setup>
import { useField } from 'vee-validate';
import { ErrorMessage } from 'vee-validate';

const { name, label, rules } = defineProps({
  name: String,
  label: String,
  rules: String
})


const { value: fieldValue, field } = useField(name, rules);
</script>

<style scoped>
/* Add any additional styling here */
</style>
