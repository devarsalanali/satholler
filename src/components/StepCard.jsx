export default function StepCard({ img }) {
	return (
		<div className="bg-secondary-500 shadow-[0px 0px 15px 0px rgba(185, 255, 102, 0.05)] rounded-lg min-h-[20rem] p-1 relative before:content=[''] before:z-[-1] before:absolute before:inset-[-2px] before:rounded-lg before:bg-gradient-to-b before:from-[#75E452] before:to-[#75E45200] before:outline before:outline-[#050D11] before:outline-offset-2 before:outline-3">
			<div className="head p-4 mb-4">
				<h3 className="ff-alro text-4xl uppercase">Step 1</h3>
				<hr className="my-1" />
				<h4 className="text-2xl">Participate</h4>
			</div>
			<img src={img} alt="step" className="w-full" />
		</div>
	)
}
