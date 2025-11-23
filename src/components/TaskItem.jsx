import { useState } from "react";
import StatusDropdown from "@/components/StatusDropDown";
import { TASK_STATUS_COLORS } from "@/constants/tasks";
import { validateTaskFields } from "@/utils/validateTaskFields";
import TaskButton from "@/components/common/TaskButton";
import ErrorMessage from "@/components/common/ErrorMessage";

export default function TaskItem({ task, taskActions }) {
	const [isEditing, setIsEditing] = useState(false);
	const [editTitle, setEditTitle] = useState(task.title);
	const [editDueDate, setEditDueDate] = useState(task.dueDate ?? "");
	const [error, setError] = useState("");

	const { changeStatus, updateTask, deleteTask } = taskActions;

	const handleSave = () => {
		const validationError = validateTaskFields(editTitle, editDueDate);
		if (validationError) {
			setError(validationError);
			return;
		}

		updateTask(task.id, {
			title: editTitle.trim(),
			dueDate: editDueDate,
		});

		setIsEditing(false);
		setError("");
	};

	const handleCancel = () => {
		setIsEditing(false);
		setEditTitle(task.title);
		setEditDueDate(task.dueDate ?? "");
		setError("");
	};

	const handleEditTitleChange = (e) => {
		const newTitle = e.target.value;
		setEditTitle(newTitle);

		if (error && newTitle.trim()) {
			setError("");
		}
	};

	const handleEditDueDateChange = (e) => {
		const nextDueDate = e.target.value;
		setEditDueDate(nextDueDate);

		if (error && nextDueDate) {
			setError("");
		}
	};

	return (
		<li className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 transition hover:bg-slate-100">
			<div className="flex items-start justify-between gap-3">
				<div className="flex-1">
					{isEditing ? (
						<>
							<input
								type="text"
								value={editTitle}
								onChange={handleEditTitleChange}
								className="mb-2 w-full rounded-md border border-slate-200 bg-white px-2 py-1 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
							/>
							<input
								type="date"
								value={editDueDate}
								onChange={handleEditDueDateChange}
								className="w-full rounded-md border border-slate-200 bg-white px-2 py-1 text-xs outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
							/>
							{error && <ErrorMessage message={error} className="mt-1" />}
						</>
					) : (
						<>
							<p className="text-sm font-medium text-slate-900">{task.title}</p>
							{task.dueDate && (
								<p className="mt-1 text-xs text-slate-500">
									마감일: {task.dueDate}
								</p>
							)}
							<p className="mt-1 text-xs text-slate-500">
								상태:{" "}
								<span
									className={`inline-flex items-center rounded-full px-2 py-0.5 text-[12px] font-medium ${
										TASK_STATUS_COLORS[task.status] ||
										"bg-slate-100 text-slate-700"
									}`}
								>
									{task.status}
								</span>
							</p>
							<p className="mt-1 text-[10px] text-slate-400">ID: {task.id}</p>
						</>
					)}
				</div>

				<div className="mt-1 flex flex-col items-end gap-2">
					<StatusDropdown
						value={task.status}
						onChange={(nextStatus) => changeStatus(task.id, nextStatus)}
					/>

					{isEditing ? (
						<div className="flex gap-1">
							<TaskButton variant="primary" onClick={handleSave}>
								저장
							</TaskButton>
							<TaskButton variant="default" onClick={handleCancel}>
								취소
							</TaskButton>
						</div>
					) : (
						<div className="flex gap-1">
							<TaskButton onClick={() => setIsEditing(true)}>수정</TaskButton>
							<TaskButton variant="danger" onClick={() => deleteTask(task.id)}>
								삭제
							</TaskButton>
						</div>
					)}
				</div>
			</div>
		</li>
	);
}
