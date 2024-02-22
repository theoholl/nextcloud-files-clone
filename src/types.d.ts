export type DirItem = {
    id: string;
    name: string;
    size: number;
    type: "image" | "folder";
    modified: string;
    selected: boolean;
  };