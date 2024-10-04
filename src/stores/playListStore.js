import { create } from 'zustand';

export const usePlayListStore = create((set) => ({
  sortType: 'asc',
  setSort: () => set((state) => ({ sortType: state })),
}));
