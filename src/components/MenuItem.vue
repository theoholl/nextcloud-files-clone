<script setup lang="ts">
defineProps<{
  icon?: string; // Material Symbol name
  text?: string;
  action: () => void;
}>();
</script>

<template>
  <button
    class="flex gap-2 items-center w-full py-2 px-4 hover:bg-gray-100"
    @click="action"
  >
    <span class="material-symbols-rounded text-sm"> {{ icon }} </span>
    {{ text }}
  </button>
</template>
