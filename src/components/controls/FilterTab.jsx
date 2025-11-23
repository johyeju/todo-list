import { TASK_FILTER } from "@/constants/tasks";

export default function FilterTab({ currentFilter, onChangeFilter }) {
	return (
		<div className="mb-4 flex flex-wrap gap-2">
			{TASK_FILTER.map((filter) => {
				const isActive = currentFilter === filter.value;

				return (
					<button
						key={filter.value}
						type="button"
						onClick={() => onChangeFilter(filter.value)}
						className={
							"rounded-full border px-3 py-1 text-xs font-medium transition " +
							(isActive
								? "border-sky-500 bg-sky-50 text-sky-700"
								: "border-slate-200 bg-white text-slate-500 hover:bg-slate-50")
						}
					>
						{filter.label}
					</button>
				);
			})}
		</div>
	);
}
