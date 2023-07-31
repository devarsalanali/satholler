import { useNavigate } from "react-router-dom"

export default function Button({
	variant,
	className,
	children,
	to,
	disabled,
	...attributes
}) {
	const navigate = useNavigate()

	const handleClick = () => {
		if (!disabled && to) {
			navigate(to)
		}
	}

	if (variant === "contained") {
		return (
			<button
				className={`rounded border-[1px] border-transparent ${
					disabled ? "bg-primary-800" : "bg-primary-400 hover:bg-primary-600"
				} text-black p-2 px-4 rounded-[10px] ${className}`}
				onClick={to && !disabled ? handleClick : undefined}
				disabled={disabled}
				{...attributes}
			>
				{children}
			</button>
		)
	} else if (variant === "outlined") {
		return (
			<button
				className={`rounded border-[2px] ${
					disabled ? "border-primary-200 text-gray-300" : "border-primary-400"
				} p-2 px-4 rounded-[10px] ${className}`}
				onClick={to && !disabled ? handleClick : undefined}
				disabled={disabled}
				{...attributes}
			>
				{children}
			</button>
		)
	}
}
