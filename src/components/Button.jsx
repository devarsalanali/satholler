export default function Button({ children, className, variant }) {
	if (variant === "contained") {
		return (
			<a
				className={`rounded border-[1px] border-transparent bg-primary-400 border-1 hover:bg-primary-600 text-black p-2 px-4 rounded-[10px] ${className}`}
			>
				{children}
			</a>
		)
	} else if (variant === "outlined") {
		return (
			<a
				className={`rounded border-[2px] border-primary-400 text-gray-300 p-2 px-4 rounded-[10px] ${className}`}
			>
				{children}
			</a>
		)
	}
}
