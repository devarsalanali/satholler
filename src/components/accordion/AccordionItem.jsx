import React, { useState } from "react"

const AccordionItem = ({
	title,
	children,
	titleClass,
	bodyClass,
	className,
	gradient,
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleAccordion = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<button
				type="button"
				className={`flex items-center relative justify-between w-full p-5 text-left ${
					gradient
						? 'bg-secondary-500 before:content=[""] before:z-[-1] before:absolute before:inset-[-1px] before:rounded-lg before:bg-gradient-to-b before:from-[#75E452] before:to-[#75E45200] before:outline before:outline-[#050D11] before:outline-offset-2 before:outline-3'
						: "border-[1px] border-gray-600 bg-secondary-300"
				}
					${className} ${titleClass} ${isOpen ? "rounded-b-none" : ""}`}
				onClick={toggleAccordion}
			>
				<span>{title}</span>
				<svg
					data-accordion-icon
					className={`w-3 h-3 shrink-0 transition-all	 ${
						!isOpen ? "rotate-180" : ""
					}`}
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 5 5 1 1 5"
					/>
				</svg>
			</button>
			<div className={!isOpen ? "hidden" : ""}>
				<div
					className={`p-5 border-[1px] border-primary-800 relative ${
						gradient
							? 'bg-secondary-500 before:content=[""] before:z-[-1] before:absolute before:inset-x-[-2px] before:bottom-0 before:top-[-65px] before:rounded-lg before:bg-gradient-to-b before:from-[#75E452] before:to-[#75E45200] before:outline before:outline-[#050D11] before:outline-offset-2 before:outline-3'
							: "border-[1px] border-gray-600 bg-secondary-300 "
					} ${bodyClass}`}
				>
					{children}
				</div>
			</div>
		</>
	)
}

export default AccordionItem
