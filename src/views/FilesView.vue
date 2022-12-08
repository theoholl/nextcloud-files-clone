<script setup lang="ts">
import HeaderBar from "@/components/HeaderBar.vue";
import FilesSidebar from "@/components/FilesSidebar.vue";
</script>

<template>
  <div class="h-full flex flex-col pb-1">
    <HeaderBar />
    <div class="flex grow mx-2 rounded-[28px] overflow-hidden">
      <FilesSidebar />

      <main class="grow p-2 bg-white">
        <div class="flex justify-between items-center p-1 pb-3">
          <div class="flex items-center gap-2">
            <button class="leading-[0] p-1">
              <span class="material-symbols-rounded text-[1rem] text-gray-500">
                home
              </span>
            </button>
            <span class="material-symbols-rounded text-[1rem] text-gray-400">
              arrow_forward_ios
            </span>
            <button
              class="p-2 bg-gray-200 rounded-full leading-[0] border border-gray-300"
            >
              <span class="material-symbols-rounded text-gray-500"> add </span>
            </button>
          </div>
          <div>
            <button class="leading-[0] p-1 mr-2">
              <span class="material-symbols-rounded text-[1rem] text-gray-500">
                grid_view
              </span>
            </button>
          </div>
        </div>
        <table class="w-full">
          <thead class="text-left">
            <tr>
              <th class="p-2"><input type="checkbox" /></th>
              <th class="w-12 p-2"></th>
              <th class="w-full p-2">
                <button class="flex content-center gap-1">
                  Name
                  <span class="material-symbols-rounded"> arrow_drop_up </span>
                </button>
              </th>
              <th></th>
              <th class="p-2">Size</th>
              <th class="p-2">Modified</th>
            </tr>
          </thead>
          <tbody class="whitespace-nowrap">
            <tr>
              <td class="p-2"><input type="checkbox" /></td>
              <td class="w-12 pr-0">
                <a href="#" tabindex="-1" class="block p-2">
                  <div
                    class="w-8 h-8 bg-gray-100 border border-gray-300 rounded-sm"
                  ></div>
                </a>
              </td>
              <td class="pl-0">
                <a href="#" class="block p-2"> welcome.txt </a>
              </td>
              <td class="p-2">
                <div class="flex gap-2">
                  <button class="leading-[0] p-2">
                    <span class="material-symbols-rounded text-[1rem]">
                      share
                    </span>
                  </button>
                  <button class="leading-[0] p-2">
                    <span class="material-symbols-rounded text-[1rem]">
                      more_horiz
                    </span>
                  </button>
                </div>
              </td>
              <td class="p-2">&lt; 1 KB</td>
              <td class="p-2">10 hours ago</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
