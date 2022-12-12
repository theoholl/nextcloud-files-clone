<script setup lang="ts">
import HeaderBar from "@/components/HeaderBar.vue";
import FilesSidebar from "@/components/FilesSidebar.vue";
import FilesAppMainViewVue from "@/components/FilesAppMainView.vue";

import { ref } from "vue";

const isSidebarVisibleOnMobile = ref(false);
const toggleSidebar = () => {
  {
    console.log("toggled")
    isSidebarVisibleOnMobile.value = !isSidebarVisibleOnMobile.value;
  }
};
</script>

<template>
  <div
    class="h-full flex flex-col pb-1 bg-[url('../assets/kamil-porembinski-clouds.jpg')] bg-center"
  >
    <HeaderBar />
    <div class="flex grow mx-2 rounded-[28px] overflow-hidden">
      <FilesSidebar :is-visible-on-mobile="isSidebarVisibleOnMobile" />
      <FilesAppMainViewVue :toggle-sidebar="toggleSidebar" />
    </div>
  </div>
</template>
