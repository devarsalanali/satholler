import React, { useState } from "react"
import { motion } from "framer-motion"

export default function ToggleSwitch({ className, setActiveTab, activeTab }) {
	const handleToggle = tab => {
		setActiveTab(tab)
	}

	return (
		<motion.div
			className={
				"bg-secondary-500 flex h-10 rounded-lg w-[200px] text-sm justify-between max-md:mx-auto overflow-hidden " +
				className
			}
		>
			<motion.button
				className={`flex-1 px-4 rounded-lg m-[1px] ${
					activeTab === "upcoming" ? "bg-secondary-300" : "bg-secondary-500"
				}`}
				onClick={() => handleToggle("upcoming")}
				whileTap={{ scale: 0.95 }} // Add scale effect when button is tapped
				transition={{ duration: 0.2 }} // Animation duration
			>
				Upcoming
			</motion.button>
			<motion.button
				className={`flex-1 rounded-lg m-[1px] ${
					activeTab === "expired" ? "bg-secondary-300" : "bg-secondary-500"
				}`}
				onClick={() => handleToggle("expired")}
				whileTap={{ scale: 0.95 }} // Add scale effect when button is tapped
				transition={{ duration: 0.2 }} // Animation duration
			>
				Expired
			</motion.button>
		</motion.div>
	)
}
