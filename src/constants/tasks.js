const TASK_STATUS = {
	TODO: "todo",
	DOING: "doing",
	DONE: "done",
};

const TASK_STATUS_LIST = [
	TASK_STATUS.TODO,
	TASK_STATUS.DOING,
	TASK_STATUS.DONE,
];

const TASK_FILTER = [
	{ value: "all", label: "전체" },
	{ value: TASK_STATUS.TODO, label: "할 일" },
	{ value: TASK_STATUS.DOING, label: "진행중" },
	{ value: TASK_STATUS.DONE, label: "완료" },
];

const TASK_STATUS_COLORS = {
	todo: "bg-sky-50 text-sky-700",
	doing: "bg-amber-50 text-amber-700",
	done: "bg-emerald-50 text-emerald-700",
};

export { TASK_STATUS, TASK_STATUS_LIST, TASK_FILTER, TASK_STATUS_COLORS };
