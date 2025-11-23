import { TASK_STATUS_LIST } from "@/constants/tasks";

export default function StatusDropdown({ value, onChange }) {
	return (
		<select
			value={value}
			onChange={(event) => onChange(event.target.value)}
			className="text-[12px] rounded-md border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
		>
			{TASK_STATUS_LIST.map((status) => (
				<option key={status} value={status}>
					{status}
				</option>
			))}
		</select>
	);
}
