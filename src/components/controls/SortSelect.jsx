export default function SortSelect({ value, onChange }) {
	return (
		<div className="sm:w-48">
			<label className="mb-1 block text-xs font-medium text-slate-500">
				정렬
			</label>
			<select
				value={value}
				onChange={(event) => onChange(event.target.value)}
				className="w-full rounded-lg border border-slate-200 bg-white px-2 py-2 text-sm text-slate-700 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
			>
				<option value="none">정렬 없음</option>
				<option value="titleAsc">제목 오름차순 (A → Z)</option>
				<option value="titleDesc">제목 내림차순 (Z → A)</option>

				<option value="dueAsc">마감일 빠른 순</option>
				<option value="dueDesc">마감일 느린 순</option>
			</select>
		</div>
	);
}
