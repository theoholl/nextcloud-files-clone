<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const menu = ref(null);
const showMenu = ref<boolean>(false);

const toggleShowMenu = (e: MouseEvent) => {
  e.stopPropagation();
  showMenu.value = !showMenu.value;
};

onClickOutside(menu, (event) => (showMenu.value = false));
</script>

<template>
  <div ref="menu" class="relative">
    <span @click="toggleShowMenu" class="p-1">
      <slot name="button"></slot>
    </span>
    <ul
      @click="toggleShowMenu"
      v-if="showMenu"
      class="absolute left-1/2 -translate-x-1/2 mt-2 bg-white border w-max z-10 rounded-md drop-shadow"
    >
      <slot name="items"></slot>
    </ul>
  </div>
</template>
