<template>
  <Tb_head></Tb_head>
  <RouterView v-if="isRouterAlive"></RouterView>
</template>


<script setup>
import Tb_head from '@/components/tb_head.vue';
import { provide, ref, nextTick } from "vue";


const isRouterAlive = ref(true);
const reload = () => {
  isRouterAlive.value = false;
  nextTick(() => {
    isRouterAlive.value = true
  })
}
provide("reload", reload);
</script>

<script >

</script>

<style lang="scss" scoped>

</style>
