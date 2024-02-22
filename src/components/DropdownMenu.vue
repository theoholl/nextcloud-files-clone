<script setup lang="ts">
import { ref } from "vue";

const showMenu = ref<boolean>(false);

const toggleShowMenu = () => (showMenu.value = !showMenu.value);
</script>

<template>
  <div class="relative">
    <span @click="toggleShowMenu" class="p-1">
      <slot name="button"></slot>
    </span>
    <ul
      v-if="showMenu"
      class="absolute left-1/2 -translate-x-1/2 mt-2 bg-white border w-max z-10 rounded-md drop-shadow"
    >
      <slot name="items"></slot>
    </ul>
  </div>
</template>
