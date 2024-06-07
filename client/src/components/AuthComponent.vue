<template>
  <div class="q-pa-md">
    <q-card class="my-card" flat bordered>
      <q-card-section>
        <q-tabs v-model="tab" class="text-teal">
          <q-tab label="Login" name="login" />
          <q-tab label="Registration" name="registration" />
        </q-tabs>
        <div class="div">
          {{ responseMessage }}
        </div>
      </q-card-section>

      <q-separator />


      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <vee-form @submit="login">
            <div class="input-field">
              <q-label class="mb-2">Email</q-label>
              <vee-field type="text" name="email" placeholder="Enter Email" class="" v-model="userLogin.email" />
              <ErrorMessage name="email" class="text-negative " />
            </div>
            <div class="input-field">
              <q-label class="mb-2">Password</q-label>
              <vee-field type="text" name="password" placeholder="Enter Password" class=""
                v-model="userLogin.password" />
              <ErrorMessage name="password" class="text-negative " />
            </div>
            <q-btn label="Login" type="submit" color="primary" />
          </vee-form>
        </q-tab-panel>

        <q-tab-panel name="registration">
          <vee-form @submit="register" :validation-schema="schema">
            <div class="input-field">
              <q-label class="mb-2">Name</q-label>
              <vee-field type="text" name="name" placeholder="Enter Name" class="" v-model="userReg.name" />
              <ErrorMessage name="name" class="text-negative " />
            </div>
            <div class="input-field">
              <q-label class="mb-2">Email</q-label>
              <vee-field type="text" name="email" placeholder="Enter Email" class="" v-model="userReg.email" />
              <ErrorMessage name="email" class="text-negative " />
            </div>
            <div class="input-field">
              <q-label class="mb-2">Password</q-label>
              <vee-field type="text" name="password" placeholder="Enter Password" class="" v-model="userReg.password" />
              <ErrorMessage name="password" class="text-negative " />
            </div>
            <div class="input-field">
              <q-label class="mb-2">Confirm Password</q-label>
              <vee-field type="text" name="confirm_password" placeholder="  Re-enter Password" class="" />
              <ErrorMessage name="confirm_password" class="text-negative " />
            </div>
            <div class="mb-3 pl-6">
              <vee-field name="tos" value="1" type="checkbox" class="" />
              <label class="inline-block">Accept terms of service</label>
              <ErrorMessage class="text-negative" name="tos" />
            </div>

            <q-btn label="Register" type="submit" color="primary" />
          </vee-form>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script setup>
import { ErrorMessage } from 'vee-validate';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();

import { useUserStore } from '../stores/user.store';

const userReg = ref({
  name: '',
  email: '',
  password: '',
});
const userLogin = ref({
  email: '',
  password: '',
});
const responseMessage = ref('');

const userStore = useUserStore();

async function register(values) {
  await userStore.registerWithEmail(userReg.value);
  responseMessage.value = userStore.responseMessage;


  if (responseMessage.value === 'User created successfully!') {
    userReg.value = {
      name: '',
      email: '',
      password: '',
    };
    responseMessage.value = '';
  }
}

async function login() {
  await userStore.loginWithEmail(userLogin.value);
  responseMessage.value = userStore.responseMessage;
  if (responseMessage.value === 'Authentication successful') {
    userLogin.value = {
      email: '',
      password: '',
    };
    responseMessage.value = '';

    router.push('/user');

  }

}
const tab = ref('login')
const schema = ref({
  name: "required|min:3|max:100|alpha_spaces",
  email: "required|min:3|max:100|email",
  password: "required|min:9|max:100|excluded:password",
  confirm_password: "passwords_mismatch:@password",
  tos: "tos",
})



</script>

<style scoped>
.my-card {
  width: 700px;
  max-width: 80%
}

.input-field {
  display: flex;
  flex-direction: column;
}
</style>
