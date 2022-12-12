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
      <button>
        <span class="material-symbols-rounded opacity-75 p-3"> search </span>
      </button>
      <button>
        <span class="material-symbols-rounded opacity-75 p-3"> contacts </span>
      </button>
      <button class="grid place-items-center h-[50px] w-[50px]">
        <div
          class="relative grid place-items-center h-[35px] w-[35px] rounded-full bg-orange-50 text-orange-300 text-lg"
        >
          <span class="mt-[-2px]">A</span>
          <div
            class="w-3 h-3 absolute right-0 bottom-0 rounded-full bg-green-500 border-2 border-white"
          ></div>
        </div>
      </button>
    </div>
  </header>
</template>