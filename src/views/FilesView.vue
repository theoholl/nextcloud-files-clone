<script setup lang="ts">
import HeaderBar from "@/components/HeaderBar.vue";
</script>

<template>
  <div class="h-full flex flex-col pb-1">
    <HeaderBar />
    <div class="flex grow mx-2 rounded-[28px] overflow-hidden">
      <aside class="min-w-[300px] p-2 bg-white opacity-80"></aside>
      <main class="grow p-2 bg-white"></main>
    </div>
  </div>
</template>

<style scoped></style>
