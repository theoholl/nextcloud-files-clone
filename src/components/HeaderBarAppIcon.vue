<script setup lang="ts">
withDefaults(
  defineProps<{
    appSymbol?: string;
    appName?: string;
    href?: string;
    isTextVisible: boolean;
    isCurrentlyActiveApp?: boolean;
  }>(),
  {
    appSymbol: "extension",
    appName: "App",
    href: "#",
    isTextVisible: false,
    isCurrentlyActiveApp: false,
  }
);
</script>

<template>
  <a
    :href="href"
    class="grid place-items-center relative w-[50px] height-[50px]"
  >
    <span
      class="material-symbols-rounded text-[1.25rem] leading-[1.25rem]"
      :class="{ 'opacity-75': !isCurrentlyActiveApp }"
    >
      {{ appSymbol }}
    </span>

    <span
      v-if="isCurrentlyActiveApp && !isTextVisible"
      class="absolute top-6 h-[5px] w-[12px] bg-white rounded-md"
    ></span>

    <span
      v-if="isTextVisible"
      class="text-xs max-w-full truncate mt-1"
      :class="{ 'font-semibold': isCurrentlyActiveApp }"
    >
      {{ appName }}
    </span>
  </a>
</template>

<style scoped></style>
