<template>
  <div>
    <q-card flat bordered class="my-card" :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">
              <slot name="title"></slot>
            </div>
          </div>

          <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section>View All</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Filter</q-item-section>
                  </q-item>

                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <slot name="content"></slot>
      </q-card-section>
    </q-card>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
