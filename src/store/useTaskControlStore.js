import { create } from "zustand";

const useTaskControlStore = create((set) => ({
	filter: "all",
	setFilter: (filter) => set({ filter }),

	searchQuery: "",
	setSearchQuery: (query) => set({ searchQuery: query }),

	sortOrder: "none",
	setSortOrder: (order) => set({ sortOrder: order }),
}));

export default useTaskControlStore;
