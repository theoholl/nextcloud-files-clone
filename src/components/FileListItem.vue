<script setup lang="ts">
import { VueElement, nextTick, ref } from "vue";
import type { DirItem } from "@/types";
import DropdownMenu from "@/components/DropdownMenu.vue";
import MenuItem from "@/components/MenuItem.vue";

const props = defineProps<{
  item: DirItem;
  handleSelectItem: (fileId: string) => void;
  handleDeleteItem: (fileId: string) => void;
  handleChangeItemName: (fileId: string, newName: string) => void;
  hanldeCopyItem: (fileId: string) => void;
}>();

const isEditingItemName = ref<boolean>(false);
const fileNameInput = ref<HTMLInputElement | null>(null);

const handleChangeFileNameButtonClicked = () => {
  isEditingItemName.value = true;
  nextTick(() => {
    fileNameInput.value?.focus();
  });
};

const handleFileNameInputBlur = () => {
  isEditingItemName.value = false;

  if (fileNameInput.value !== null) {
    const inputElement = fileNameInput.value;
    props.handleChangeItemName(props.item.id, inputElement.value);
  }
};

const readableFileSize = (size: number): string => {
  if (size < 1000) return "< 1 KB";
  if (size < 1000000) return `${Math.round(size / 1000)} KB`;
  if (size < 1000000000) return `${Math.round(size / 1000000)} MB`;
  return `${Math.round(size / 1000000000)} GB`;
};
</script>

<template>
  <tr class="border-y">
    <td class="p-2 pl-4" @click="handleSelectItem(item.id)">
      <input :checked="item.selected" type="checkbox" />
    </td>
    <td class="w-12 pr-0">
      <a href="#" tabindex="-1" class="block p-2">
        <div v-if="item.type === 'image'">
          <div
            class="w-8 h-8 bg-gray-100 border border-gray-300 rounded-sm"
          ></div>
        </div>
        <div
          v-else-if="item.type === 'folder'"
          class="grid place-items-center w-8 h-8"
        >
          <span class="material-symbols-rounded text-gray-500">
            {{ item.type }}
          </span>
        </div>
      </a>
    </td>
    <td class="pl-0">
      <input
        ref="fileNameInput"
        v-if="isEditingItemName"
        @blur="handleFileNameInputBlur"
        type="text"
        :value="item.name"
        class="w-full px-2 py-1"
      />
      <a v-else href="#" class="block p-2"> {{ item.name }} </a>
    </td>
    <td class="p-2">
      <div class="flex gap-2 text-gray-500">
        <button class="leading-[0] p-2">
          <span class="material-symbols-rounded text-[1rem]"> share </span>
        </button>
        <DropdownMenu>
          <template #button>
            <button class="leading-[0] p-2">
              <span class="material-symbols-rounded text-[1rem]">
                more_horiz
              </span>
            </button>
          </template>
          <template #items>
            <MenuItem
              icon="edit"
              text="Rename"
              :action="handleChangeFileNameButtonClicked"
            />
            <MenuItem icon="delete" text="Delete" :action="() => handleDeleteItem(item.id)" />
            <MenuItem icon="file_copy" text="Make a copy" :action="() => hanldeCopyItem(item.id)" />
          </template>
        </DropdownMenu>
      </div>
    </td>
    <td class="p-2 max-lg:hidden">{{ readableFileSize(item.size) }}</td>
    <td class="p-2 pr-8 max-lg:hidden">{{ item.modified }}</td>
  </tr>
</template>
