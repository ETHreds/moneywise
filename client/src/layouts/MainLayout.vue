<template>
  <q-layout view="hHh lpR fFf">

    <q-header bordered height-hint="98">
      <q-toolbar>
        <q-item >
          <q-item-section side>
            <q-avatar clickable v-ripple round size="40px">
              <img src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-bold text-deep-orange-10">Welcome Back </q-item-label>
            <q-item-label caption>Joe Magolo</q-item-label>
          </q-item-section>
        </q-item>
        <q-space />
        <q-item>
          <q-btn round color="blue" icon="notifications">
            <q-badge floating color="red" rounded />
          </q-btn>
      </q-item>
      </q-toolbar>

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-tabs
        v-model="tab"
        narrow-indicator
        dense
        align="center"
      >
        <q-tab class="text-purple" name="mails" icon="home" label=" Home" />
        <q-tab class="text-orange" name="alarms" icon="alarm" label="Wallet" />
        <q-tab class="text-teal" name="movies" icon="movie" label="Account" />
        <q-tab class="text-teal" name="movies" icon="movie" label="Statistics" />

      </q-tabs>
</q-footer>

  </q-layout>
</template>
