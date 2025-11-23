import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import TaskControls from "@/components/controls/TaskControls";
import { ERROR_MESSAGE_LOAD_TASKS } from "@/constants/errorMessages";
import { useTasks } from "@/hooks/useTasks";
import { getVisibleTasks } from "@/utils/getVisibleTasks";
import useTaskControlStore from "@/store/useTaskControlStore";

function App() {
	const { tasks, setTasks, addTask, changeTaskStatus, updateTask, deleteTask } =
		useTasks();
	const { filter, searchQuery, sortOrder } = useTaskControlStore();

	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const loadInitialTasks = async () => {
		setIsLoading(true);
		setError(null);

		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));

			const response = await fetch("/mocks/tasks.json");

			if (!response.ok) {
				throw new Error("Failed to fetch tasks");
			}

			const data = await response.json();
			setTasks(data);
		} catch {
			setError(ERROR_MESSAGE_LOAD_TASKS);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		loadInitialTasks();
	}, []);

	const visibleTasks = getVisibleTasks(tasks, {
		filter,
		searchQuery,
		sortOrder,
	});

	return (
		<main className="min-h-screen bg-slate-100 text-slate-900">
			<div className="mx-auto w-full max-w-4xl px-4 py-8 md:py-10">
				<div className="mb-4">
					<Header onClickError={() => setError(ERROR_MESSAGE_LOAD_TASKS)} />
				</div>

				<TaskForm onAddTask={addTask} />
				<TaskControls />

				<TaskList
					tasks={visibleTasks}
					isLoading={isLoading}
					error={error}
					onRetry={loadInitialTasks}
					taskActions={{
						changeStatus: changeTaskStatus,
						updateTask: updateTask,
						deleteTask: deleteTask,
					}}
				/>
			</div>
		</main>
	);
}

export default App;
