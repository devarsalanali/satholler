export default function StepCard({ img }) {
	return (
		<div className="bg-secondary-500 shadow-[0px 0px 15px 0px rgba(185, 255, 102, 0.05)] border-primary-300 border-[1px] rounded-lg min-h-[20rem] p-1">
			<div className="head p-4 mb-4">
				<h3 className="ff-alro text-4xl uppercase">Step 1</h3>
				<hr className="my-1" />
				<h4 className="text-2xl">Participate</h4>
			</div>
			<img src={img} alt="step" className="w-full" />
		</div>
	)
}
