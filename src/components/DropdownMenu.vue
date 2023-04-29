<script setup lang="ts">
import { ref } from "vue";

const showMenu = ref<boolean>(false);

const toggleShowMenu = () => (showMenu.value = !showMenu.value);
</script>

<template>
  <div class="relative">
    <span v-on:click="toggleShowMenu" class="p-1">
      <slot></slot>
    </span>
    <ul
      v-if="showMenu"
      class="absolute left-1/2 -translate-x-1/2 mt-2 bg-white border w-max z-10 rounded-md drop-shadow"
    >
      <button
        class="flex gap-2 items-center w-full py-2 px-4 hover:bg-gray-100"
      >
        <span class="material-symbols-rounded text-sm"> upload </span>
        Upload file
      </button>
      <button
        class="flex gap-2 items-center w-full py-2 px-4 hover:bg-gray-100"
      >
        <span class="material-symbols-rounded text-sm"> folder </span>
        New folder
      </button>
      <button
        class="flex gap-2 items-center w-full py-2 px-4 hover:bg-gray-100"
      >
        <span class="material-symbols-rounded text-sm"> draft </span>
        New text file
      </button>
    </ul>
  </div>
</template>
