<template>
  <div>
    <HomeViewVue />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeViewVue from "./views/Home/HomeView.vue";

export default defineComponent({
  components: { HomeViewVue },
});
</script>

<style scoped></style>
