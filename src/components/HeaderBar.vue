<script setup lang="ts">
import { ref } from "vue";
import HeaderBarAppIcon from "@/components/HeaderBarAppIcon.vue";

const areAppNamesVisible = ref(false);
</script>

<template>
  <header class="flex justify-between items-center text-white">
    <div>
      <div class="flex items-center">
        <a href="/"
          ><img src="../assets/logo.svg" width="62" class="py-3 mx-3"
        /></a>
        <div
          class="flex gap-1"
          @focusin="areAppNamesVisible = true"
          @mouseenter="areAppNamesVisible = true"
          @focusout="areAppNamesVisible = false"
          @mouseleave="areAppNamesVisible = false"
        >
          <HeaderBarAppIcon
            app-name="Dashboard"
            app-symbol="trip_origin"
            :is-text-visible="areAppNamesVisible"
          />
          <HeaderBarAppIcon
            app-name="Files"
            app-symbol="folder"
            :is-currently-active-app="true"
            :is-text-visible="areAppNamesVisible"
          />
          <HeaderBarAppIcon :is-text-visible="areAppNamesVisible" />
        </div>
      </div>
    </div>
    <div class="flex">
      <span class="material-symbols-rounded opacity-75 p-3"> search </span>
      <span class="material-symbols-rounded opacity-75 p-3"> contacts </span>
    </div>
  </header>
</template>

<style scoped></style>
