<template>
  <div>
    <YoTestVue />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import YoTestVue from "./YoTest/YoTest.vue";

export default defineComponent({
  components: { YoTestVue },
});
</script>
