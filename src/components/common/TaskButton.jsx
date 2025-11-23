export default function TaskButton({
	variant = "default",
	children,
	...props
}) {
	const base = "rounded-md px-2 py-1 text-[12px] font-medium transition";

	const styles = {
		default: "border border-slate-200 text-slate-600 hover:bg-slate-100",
		primary: "bg-emerald-600 text-white hover:bg-emerald-700",
		danger: "border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100",
	};

	return (
		<button className={`${base} ${styles[variant]}`} {...props}>
			{children}
		</button>
	);
}
