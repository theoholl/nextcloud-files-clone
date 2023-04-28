<script setup lang="ts">
import { ref } from "vue";

const isFocused = ref<boolean>(false);

const focus = () => isFocused.value = true;

const unfocus = () => isFocused.value = false;
</script>

<template>
  <div
    contenteditable="true"
    class="text-slate-500 hover:text-slate-600 px-2 md:px-4 py-2 rounded-md cursor-text relative"
    v-on:focus="focus"
    v-on:blur="unfocus"
  >
    <div v-if="isFocused" class="absolute right-1 top-0 flex gap-0.5 text-sm">
      <span class="material-symbols-rounded text-sm"> done </span> saved
    </div>

    <h1 class="text-xl font-bold pb-2">Welcome to Nextcloud! 📱 ☁ 💻</h1>
    <p>
      Here you can add a description or any other info relevant for the folder.
      It will show as a 'Readme.md' file and in the web interface nicely up at
      the top.
    </p>
  </div>
</template>
