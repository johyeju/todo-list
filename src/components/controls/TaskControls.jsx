import FilterTab from "@/components/controls/FilterTab";
import SearchInput from "@/components/controls/SearchInput";
import SortSelect from "@/components/controls/SortSelect";
import useTaskControlStore from "@/store/useTaskControlStore";

export default function TaskControls() {
	const {
		filter,
		setFilter,
		searchQuery,
		setSearchQuery,
		sortOrder,
		setSortOrder,
	} = useTaskControlStore();

	return (
		<section className="mb-4 space-y-3">
			<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
				<SearchInput value={searchQuery} onChange={setSearchQuery} />
				<SortSelect value={sortOrder} onChange={setSortOrder} />
			</div>

			<FilterTab currentFilter={filter} onChangeFilter={setFilter} />
		</section>
	);
}
