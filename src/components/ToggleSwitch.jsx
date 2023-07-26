import React, { useState } from "react"

export default function ToggleSwitch({ className }) {
	const [activeTab, setActiveTab] = useState("upcoming")

	const handleToggle = tab => {
		setActiveTab(tab)
	}

	return (
		<div
			className={
				"bg-secondary-500 flex h-10 rounded-lg w-[200px] text-sm justify-between max-md:mx-auto overflow-hidden " +
				className
			}
		>
			<button
				className={`flex-1 px-4 rounded-lg m-[1px] ${
					activeTab === "upcoming" ? "bg-secondary-300" : "bg-secondary-500"
				}`}
				onClick={() => handleToggle("upcoming")}
			>
				Upcoming
			</button>
			<button
				className={`flex-1 rounded-lg m-[1px] ${
					activeTab === "expired" ? "bg-secondary-300" : "bg-secondary-500"
				}`}
				onClick={() => handleToggle("expired")}
			>
				Expired
			</button>
		</div>
	)
}
