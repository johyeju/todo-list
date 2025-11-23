import { useState } from "react";
import { validateTaskFields } from "@/utils/validateTaskFields";
import ErrorMessage from "@/components/common/ErrorMessage";

export default function TaskForm({ onAddTask }) {
	const [title, setTitle] = useState("");
	const [dueDate, setDueDate] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		const validationError = validateTaskFields(title, dueDate);
		if (validationError) {
			setError(validationError);
			return;
		}

		onAddTask(title.trim(), dueDate);

		setTitle("");
		setDueDate("");
		setError("");
	};

	const handleTitleChange = (event) => {
		setTitle(event.target.value);

		if (error && event.target.value.trim()) {
			setError("");
		}
	};

	const handleDueDateChange = (event) => {
		const next = event.target.value;
		setDueDate(next);

		if (error && next) {
			setError("");
		}
	};

	return (
		<section className="mb-5 rounded-xl bg-white/90 p-4 shadow-sm ring-1 ring-slate-200 md:p-5">
			<h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
				새 작업 추가
			</h2>

			<form
				className="flex flex-col gap-3 sm:flex-row sm:items-center"
				onSubmit={handleSubmit}
			>
				<div className="flex-1 space-y-2">
					<input
						type="text"
						placeholder="예: 과제 요구사항 분석하기"
						value={title}
						onChange={handleTitleChange}
						className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-100"
					/>

					<input
						type="date"
						value={dueDate}
						onChange={handleDueDateChange}
						className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-100"
					/>
				</div>

				<button
					type="submit"
					className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700 sm:self-stretch sm:px-5"
				>
					추가
				</button>
			</form>

			{error && <ErrorMessage message={error} className="mt-2" />}
		</section>
	);
}
