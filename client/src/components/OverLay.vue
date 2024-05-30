<template>
  <div class="q-pa-md q-gutter-sm">

    <q-dialog v-model="dialogVisible">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet
          porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro
          labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="close" color="primary" @click="closeDialog" />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  showOverlay: {
    type: Boolean,
    default: false
  }
});

const dialogVisible = ref(props.alert);

const closeDialog = () => {
  dialogVisible.value = false;
};

// watch(() => props.alert, (newValue) => {
//   dialogVisible.value = newValue;
// });
</script>
