<script setup lang="ts">
import RoundedButton from "@/components/RoundedButton.vue";

defineProps<{
  isVisible: boolean;
}>();

const topButtons = [
  { text: "All files", symbol: "folder", isActive: true },
  { text: "Recent", symbol: "schedule", isActive: false },
  { text: "Favorites", symbol: "star", isActive: false },
  { text: "Shares", symbol: "share", isActive: false },
  { text: "Tags", symbol: "sell", isActive: false },
];

const bottomButtons = [
  { text: "Deleted files", symbol: "delete", isActive: false },
  { text: "164 B used", symbol: "pie_chart", isActive: false },
  { text: "Files settings", symbol: "settings", isActive: false },
];
</script>

<template>
  <aside
    class="flex flex-col justify-between min-w-[300px] p-2 bg-[#FFFFFFCC] overflow-scroll backdrop-blur"
    :class="isVisible ? 'min-w-[300px]' : 'hidden'"
  >
    <menu class="flex flex-col gap-1">
      <li v-for="item in topButtons">
        <RoundedButton
          :text="item.text"
          :symbol="item.symbol"
          :is-active="item.isActive"
        />
      </li>
    </menu>

    <menu class="flex flex-col gap-1">
      <li v-for="item in bottomButtons">
        <RoundedButton
          :text="item.text"
          :symbol="item.symbol"
          :is-active="item.isActive"
        />
      </li>
    </menu>
  </aside>
</template>