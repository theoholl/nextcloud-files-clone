<script setup lang="ts">
withDefaults(
  defineProps<{
    symbol?: string;
    text?: string;
    action?: () => void;
    isActive?: boolean;
  }>(),
  {
    symbol: "category",
    text: "Rounded Button",
    isActive: false
  }
);
</script>

<template>
  <button
    class="w-full flex gap-3 p-3 rounded-[28px] items-center hover:bg-white opacity-70"
    :class="isActive && 'bg-white'"
    href="#"
    @click="action"
  >
    <span class="material-symbols-rounded text-[1rem]"> {{ symbol }} </span>
    <span> {{ text }} </span>
  </button>
</template>

<style scoped></style>
