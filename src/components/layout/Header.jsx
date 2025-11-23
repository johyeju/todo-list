export default function Header({ onClickError }) {
	return (
		<header className="mb-6">
			<div className="flex items-center justify-between gap-3">
				<div>
					<h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
						작업 관리
					</h1>
					<p className="mt-1 text-sm text-slate-500 md:text-base">
						새로운 작업을 추가하고, 상태를 관리하는 TODO 보드입니다.
					</p>
				</div>

				{onClickError && (
					<button
						type="button"
						onClick={onClickError}
						className="rounded-md border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700 hover:bg-rose-100"
					>
						에러 상태 UI
					</button>
				)}
			</div>
		</header>
	);
}
