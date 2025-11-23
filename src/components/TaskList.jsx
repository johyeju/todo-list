import TaskItem from "./TaskItem";

export default function TaskList({
	tasks,
	isLoading,
	error,
	onRetry,
	taskActions,
}) {
	return (
		<section className="rounded-xl bg-white/90 p-4 shadow-sm ring-1 ring-slate-200 md:p-5">
			<h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
				작업 목록
			</h2>

			{error ? (
				<div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
					<p>{error}</p>

					<button
						type="button"
						onClick={onRetry}
						className="mt-2 inline-flex items-center rounded-md bg-rose-600 px-3 py-1 text-xs font-medium text-white hover:bg-rose-700"
					>
						다시 시도
					</button>
				</div>
			) : isLoading ? (
				<p className="text-sm text-slate-400">
					작업 목록을 불러오는 중입니다...
				</p>
			) : tasks.length === 0 ? (
				<p className="text-sm text-slate-400">아직 등록된 작업이 없습니다.</p>
			) : (
				<ul className="space-y-2">
					{tasks.map((task) => (
						<TaskItem key={task.id} task={task} taskActions={taskActions} />
					))}
				</ul>
			)}
		</section>
	);
}
