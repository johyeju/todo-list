export default function ErrorMessage({ message, className = "" }) {
	if (!message) return null;

	return (
		<p className={`text-rose-600 text-[14px] mt-1 ${className}`}>{message}</p>
	);
}
