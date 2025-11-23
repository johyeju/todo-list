export function getVisibleTasks(tasks, { filter, searchQuery, sortOrder }) {
	let result = tasks;

	if (filter !== "all") {
		result = result.filter((task) => task.status === filter);
	}

	const trimmedQuery = searchQuery.trim();
	if (trimmedQuery) {
		const keyword = trimmedQuery.toLowerCase();
		result = result.filter((task) =>
			task.title.toLowerCase().includes(keyword)
		);
	}

	if (sortOrder === "titleAsc") {
		result = [...result].sort((a, b) => a.title.localeCompare(b.title, "ko"));
	} else if (sortOrder === "titleDesc") {
		result = [...result].sort((a, b) => b.title.localeCompare(a.title, "ko"));
	} else if (sortOrder === "dueAsc") {
		result = [...result].sort(
			(a, b) => new Date(a.dueDate) - new Date(b.dueDate)
		);
	} else if (sortOrder === "dueDesc") {
		result = [...result].sort(
			(a, b) => new Date(b.dueDate) - new Date(a.dueDate)
		);
	}

	return result;
}
