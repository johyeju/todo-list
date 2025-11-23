export default function SearchInput({ value, onChange }) {
	return (
		<div className="flex-1">
			<label className="mb-1 block text-xs font-medium text-slate-500">
				검색
			</label>
			<input
				type="text"
				placeholder="작업 제목 검색..."
				value={value}
				onChange={(event) => onChange(event.target.value)}
				className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
			/>
		</div>
	);
}
