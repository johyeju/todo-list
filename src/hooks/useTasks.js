import { useState } from "react";
import { TASK_STATUS } from "@/constants/tasks";

export function useTasks(initialTasks = []) {
	const [tasks, setTasks] = useState(initialTasks);

	const addTask = (title, dueDate) => {
		const newTask = {
			id: crypto.randomUUID(),
			title,
			status: TASK_STATUS.TODO,
			dueDate,
		};
		setTasks((prev) => [newTask, ...prev]);
	};

	const changeTaskStatus = (id, nextStatus) => {
		setTasks((prev) =>
			prev.map((task) =>
				task.id === id ? { ...task, status: nextStatus } : task
			)
		);
	};

	const updateTask = (id, updates) => {
		setTasks((prev) =>
			prev.map((task) => (task.id === id ? { ...task, ...updates } : task))
		);
	};

	const deleteTask = (id) => {
		setTasks((prev) => prev.filter((task) => task.id !== id));
	};

	return { tasks, addTask, changeTaskStatus, updateTask, deleteTask, setTasks };
}
