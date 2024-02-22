<script setup lang="ts">
import { ref } from "vue";
import ReadmeEditor from "@/components/ReadmeEditor.vue";
import DropdownMenu from "@/components/DropdownMenu.vue";
import MenuItem from "@/components/MenuItem.vue";

defineProps<{
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
}>();

type Item = {
  id: string;
  name: string;
  size: number;
  type: "image" | "folder";
  modified: string;
  selected: boolean;
};

const files = ref<Item[]>([
  {
    id: "b830d7c1-82f3-4c7f-92df-6b94aeb778b9",
    name: "welcome.jpeg",
    size: 2000000,
    type: "image",
    modified: "10 hours ago",
    selected: false,
  },
  {
    id: "21731e5d-f039-4b94-8edc-2a32dcecf7fa",
    name: "lunch-time.avif",
    size: 164000,
    type: "image",
    modified: "10 hours ago",
    selected: false,
  },
  {
    id: "3913adda-55ab-460a-bd36-2f4adeb0b2fa",
    name: "bookings",
    size: 2364000,
    type: "folder",
    modified: "10 hours ago",
    selected: false,
  },
]);

let isSelectAllBoxChecked = false;

const handleSelectFile = (fileId: string) => {
  toggleFileSelection(fileId);

  if (selectedFilesCount() === files.value.length) {
    isSelectAllBoxChecked = true;
  } else {
    isSelectAllBoxChecked = false;
  }
};

const toggleSelectAllFiles = () => {
  files.value = files.value.map((file) => {
    file.selected = !isSelectAllBoxChecked;
    return file;
  });

  isSelectAllBoxChecked = !isSelectAllBoxChecked;
};

const selectedFilesCount = (): number => {
  const selectedFiles = files.value.filter((file) => file.selected === true);
  return selectedFiles.length;
};

const toggleFileSelection = (fileId: string) => {
  files.value = files.value.map((file) => {
    if (file.id === fileId) {
      file.selected = !file.selected;
    }

    return file;
  });
};

const allFilesSizeInByte = (): number => {
  let size = 0;
  files.value.forEach((file) => (size += file.size));
  return size;
};

const readableFileSize = (size: number): string => {
  if (size < 1000) return "< 1 KB";
  if (size < 1000000) return `${Math.round(size / 1000)} KB`;
  if (size < 1000000000) return `${Math.round(size / 1000000)} MB`;
  return `${Math.round(size / 1000000000)} GB`;
};
</script>

<template>
  <main class="grow py-2 bg-white">
    <div class="flex justify-between items-center p-1">
      <div class="flex items-center gap-2 pl-2">
        <button class="leading-[0] p-1" @click="toggleSidebar()">
          <span class="material-symbols-rounded text-[1em] text-gray-500">
            {{ isSidebarVisible ? "menu_open" : "menu" }}
          </span>
        </button>
        <button class="leading-[0] p-1 ml-1">
          <span class="material-symbols-rounded text-[1rem] text-gray-500">
            home
          </span>
        </button>
        <span class="material-symbols-rounded text-[1rem] text-gray-400">
          arrow_forward_ios
        </span>
        <DropdownMenu>
          <template #button>
            <button
              class="p-2 bg-gray-200 rounded-full leading-[0] border border-gray-300"
            >
              <span class="material-symbols-rounded text-gray-500"> add </span>
            </button>
          </template>
          <template #items>
            <MenuItem icon="upload" text="Upload file" :action="() => {}" />
            <MenuItem icon="folder" text="New folder" :action="() => {}" />
            <MenuItem icon="draft" text="New text file" :action="() => {}" />
          </template>
        </DropdownMenu>
      </div>
      <div>
        <button class="leading-[0] p-1 mr-4">
          <span class="material-symbols-rounded text-[1rem] text-gray-500">
            grid_view
          </span>
        </button>
      </div>
    </div>

    <div class="py-2 px-2 md:px-8 md:pt-4 md:pb-8">
      <ReadmeEditor />
    </div>

    <table class="w-full">
      <thead class="text-left text-gray-500">
        <tr>
          <th class="pl-4" @click="toggleSelectAllFiles">
            <input :checked="isSelectAllBoxChecked" type="checkbox" />
          </th>
          <th class="w-12 p-2"></th>
          <th class="w-full p-2">
            <button class="flex content-center gap-1">
              Name
              <span class="material-symbols-rounded"> arrow_drop_up </span>
            </button>
          </th>
          <th></th>
          <th class="p-2 max-lg:hidden"><button>Size</button></th>
          <th class="p-2 pr-8 max-lg:hidden"><button>Modified</button></th>
        </tr>
      </thead>

      <tbody class="whitespace-nowrap">
        <tr class="border-y" v-for="file in files" :key="file.id">
          <td class="p-2 pl-4" @click="handleSelectFile(file.id)">
            <input :checked="file.selected" type="checkbox" />
          </td>
          <td class="w-12 pr-0">
            <a href="#" tabindex="-1" class="block p-2">
              <div v-if="file.type === 'image'">
                <div
                  class="w-8 h-8 bg-gray-100 border border-gray-300 rounded-sm"
                ></div>
              </div>
              <div
                v-else-if="file.type === 'folder'"
                class="grid place-items-center w-8 h-8"
              >
                <span class="material-symbols-rounded text-gray-500">
                  {{ file.type }}
                </span>
              </div>
            </a>
          </td>
          <td class="pl-0">
            <a href="#" class="block p-2"> {{ file.name }} </a>
          </td>
          <td class="p-2">
            <div class="flex gap-2 text-gray-500">
              <button class="leading-[0] p-2">
                <span class="material-symbols-rounded text-[1rem]">
                  share
                </span>
              </button>
              <button class="leading-[0] p-2">
                <span class="material-symbols-rounded text-[1rem] font-black">
                  more_horiz
                </span>
              </button>
            </div>
          </td>
          <td class="p-2 max-lg:hidden">{{ readableFileSize(file.size) }}</td>
          <td class="p-2 pr-8 max-lg:hidden">{{ file.modified }}</td>
        </tr>
      </tbody>

      <tfoot class="whitespace-nowrap">
        <tr class="text-gray-500">
          <td></td>
          <td></td>
          <td class="p-2">
            <span v-if="files.length == 1">1 file</span>
            <span v-else>{{ files.length }} files</span>
          </td>
          <td></td>
          <td class="p-2 max-lg:hidden">
            {{ readableFileSize(allFilesSizeInByte()) }}
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </main>
</template>
