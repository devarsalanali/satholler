import React, { useState, useEffect } from "react"
import { calculateTimeLeft } from "../utilities/calculateTimeLeft"

export default function Counter({ targetDateTime }) {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDateTime))

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft(targetDateTime))
		}, 1000)

		return () => clearInterval(timer)
	}, [targetDateTime])

	return (
		<div className="flex gap-2">
			<div className="bg-slate-800 text-center w-[56px] h-[56px] rounded-[10px] flex items-center justify-center">
				{timeLeft.days} <br /> Days
			</div>
			<div className="bg-slate-800 text-center w-[56px] h-[56px] rounded-[10px] flex items-center justify-center">
				{timeLeft.hours} <br /> Hours
			</div>
			<div className="bg-slate-800 text-center w-[56px] h-[56px] rounded-[10px] flex items-center justify-center">
				{timeLeft.minutes} <br /> Mins
			</div>
			<div className="bg-slate-800 text-center w-[56px] h-[56px] rounded-[10px] flex items-center justify-center">
				{timeLeft.seconds} <br /> Sec
			</div>
		</div>
	)
}
