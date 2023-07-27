import { Link, useNavigate } from "react-router-dom"

export default function Button({
	variant,
	className,
	children,
	to,
	...attributes
}) {
	const navigate = useNavigate()

	const handleClick = () => {
		if (to) {
			navigate(to)
		}
	}

	if (variant === "contained") {
		return (
			<button
				className={`rounded border-[1px] border-transparent bg-primary-400 border-1 hover:bg-primary-600 text-black p-2 px-4 rounded-[10px] ${className}`}
				onClick={to ? handleClick : undefined}
				{...attributes}
			>
				{children}
			</button>
		)
	} else if (variant === "outlined") {
		return (
			<button
				className={`rounded border-[2px] border-primary-400 text-gray-300 p-2 px-4 rounded-[10px] ${className}`}
				onClick={to ? handleClick : undefined}
				{...attributes}
			>
				{children}
			</button>
		)
	}
}
