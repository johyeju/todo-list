import { FORM_ERROR_MESSAGES } from "@/constants/errorMessages";

export function validateTaskFields(title, dueDate) {
	const trimmedTitle = title.trim();

	if (!trimmedTitle) {
		return FORM_ERROR_MESSAGES.EMPTY_INPUT;
	}

	if (!dueDate) {
		return FORM_ERROR_MESSAGES.EMPTY_DUE_DATE;
	}

	const selectedDate = new Date(dueDate);
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	if (selectedDate < today) {
		return FORM_ERROR_MESSAGES.INVALID_DUE_DATE;
	}

	return null;
}
