export default function Modal({
	id,
	children,
	isOpen,
	setIsOpen,
	title,
	titleProps,
	className,
}) {
	return (
		<div
			className={`fixed inset-x-0 inset-y-0 bg-[rgba(0,0,0,0.8)] grid place-content-center z-[100] ${
				isOpen ? "grid" : "hidden"
			}`}
			id={id}
			tabIndex="-1"
			aria-hidden={!isOpen}
		>
			<div
				className={`bg-secondary-500 p-4 w-[500px] max-md:w-full border-[1px] border-primary-800 rounded-lg ${className}`}
			>
				<div className="flex items-center justify-between">
					<h4 className={`ff-alro text-lg md:text-xl  ${titleProps}`}>
						{title}
					</h4>
					<div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="15"
							height="15"
							viewBox="0 0 20 20"
							fill="none"
						>
							<path
								d="M18.6667 18.6667L1.33337 1.33337M18.6667 1.33337L1.33337 18.6667"
								stroke="#BABABA"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
					</div>
				</div>
				{children}
			</div>
		</div>
	)
}
