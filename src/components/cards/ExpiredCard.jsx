import greenCheck from "../../assets/images/green-check.svg"
import expiredCard from "../../assets/images/expired-card.jpg"

export default function ExpiredCard(props) {
	return (
		<div className="bg-gradient-to-br from-[#75E452] to-[#75E45200] rounded-lg p-[2px] outline outline-[#050D11] outline-offset-2 outline-3">
			<div className="bg-secondary-500 shadow-[0px 0px 15px 0px rgba(185, 255, 102, 0.05)] rounded-lg min-h-[20rem] p-1 flex flex-col align-center justify-stretch gap-2">
				<img
					src={expiredCard}
					alt="logo"
					className="grow object-cover rounded-lg"
				/>
				<div className="ms-2">
					<div className="flex flex-row items-center gap-2">
						<h5>Collection Name</h5>{" "}
						<img src={greenCheck} alt="green check mark" />
					</div>
					<h5 className="text-slate-400">Sold Out</h5>
				</div>
			</div>
		</div>
	)
}
