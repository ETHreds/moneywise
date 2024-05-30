<template>
  <div class="q-pa-md">
    <q-card class="my-card" flat bordered>
      <q-card-section>
        <q-tabs v-model="tab" class="text-teal">
          <q-tab label="Login" name="login" />
          <q-tab label="Registration" name="registration" />
        </q-tabs>
      </q-card-section>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <form @submit.prevent="login">
            <q-input v-model="loginForm.email" label="Email" />
            <q-input v-model="loginForm.password" label="Password" type="password" />
            <q-btn type="submit" label="Login" color="primary" />
          </form>
        </q-tab-panel>

        <q-tab-panel name="registration">
          <form @submit.prevent="register">
            <q-input v-model="registerForm.name" label="Name" />
            <q-input v-model="registerForm.email" label="Email" />
            <q-input v-model="registerForm.password" label="Password" type="password" />
            <q-input v-model="registerForm.confirmPassword" label="Confirm Password" type="password" />
            <q-btn type="submit" label="Register" color="primary" />
          </form>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('login')

const loginForm = {
  email: '',
  password: ''
}

const registerForm = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const login = () => {
  // Implement login logic here
  console.log('Logging in...', loginForm)
}

const register = () => {
  // Implement registration logic here
  console.log('Registering...', registerForm)
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
</style>
