import greenCheck from "../../assets/images/green-check.svg"
import logo from "../../assets/images/Union.svg"
import Button from "../Button"

export default function UpcomingCard(props) {
	return (
		<div className="bg-gradient-to-br from-[#75E452] to-[#75E45200] rounded-lg p-[2px] outline outline-[#050D11] outline-offset-2 outline-3">
			<div className="bg-secondary-500 shadow-[0px 0px 15px 0px rgba(185, 255, 102, 0.05)] rounded-lg min-h-[20rem] p-1 ">
				<div className="text-center my-5 xl:my-10">
					<img src={logo} alt="logo" className="mx-auto" />
					<h5 className="ff-alro subpixel-antialiased text-lg">SatHoller</h5>
				</div>
				<h5 className="text-center text-xl text-gray-500 ff-alro subpixel-antialiased ">
					Coming Soon!
				</h5>

				<div className="grid grid-cols-4 bg-secondary-700 p-2 text-center rounded text-slate-400 text-sm mb-2 mt-4">
					<h6 className="">
						? <br /> Days
					</h6>
					<h6 className="">
						? <br /> Hours
					</h6>
					<h6 className="">
						? <br /> Mins
					</h6>
					<h6 className="">
						? <br /> Sec
					</h6>
				</div>
				<div className="ms-2">
					<h5>SetHoller</h5>
					<div className="flex flex-row items-center gap-2">
						<h5>SetHoller</h5> <img src={greenCheck} alt="green check mark" />
					</div>
				</div>
				<div className="footer bg-secondary-200 text-end mt-2 p-2 rounded-lg bg-secondary-300">
					<Button variant="contained">Coming Soon</Button>
				</div>
			</div>
		</div>
	)
}
