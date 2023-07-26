import placeBid from "../../assets/images/place-bid-item.png"
import Button from "../Button"

function PlaceBid() {
	return (
		// Remove margins before use
		<div className="bg-secondary-500 p-4 my-20 mx-5 md:mx-auto max-w-[30rem] border-[1px] border-primary-800 rounded-lg">
			<div className="flex items-center justify-between">
				<h4 className="ff-alro text-lg md:text-xl">Place Bid</h4>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="15"
					height="15"
					viewBox="0 0 20 20"
					fill="none"
				>
					<path
						d="M18.6667 18.6667L1.33337 1.33337M18.6667 1.33337L1.33337 18.6667"
						stroke="#BABABA"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</svg>
			</div>
			<div className="body mt-3">
				<div className="flex gap-3">
					<img
						src={placeBid}
						alt="nft"
						className="w-[100px] object-cover rounded-lg"
					/>
					<div>
						<h5 className="mb-1">Item Name</h5>
						<h5>Collection Name</h5>
					</div>
				</div>
				<div className="bg-secondary-300 mt-3 p-4 rounded-lg">
					<div className="flex justify-between items-center">
						<h5>Balance</h5>
						<h5>2 BTC</h5>
					</div>
					<div className="flex justify-between items-center">
						<h5>Floor price</h5>
						<h5>0.04 BTC</h5>
					</div>
					<div className="flex justify-between items-center">
						<h5>Best price</h5>
						<h5>--</h5>
					</div>
				</div>
				<div className="flex flex-row gap-2 mt-3">
					<input
						placeholder="Enter Amount"
						type="number"
						className="w-full bg-[#17202A] border-[#BFBFC3] border-[1px] rounded-lg text-sm p-3 px-3"
					/>
					<button className="bg-[#040B11] p-2 border-[1px] border-[#BFBFC3] rounded-lg text-sm text-slate-400 px-4 md:px-5">
						BTC
					</button>
				</div>

				<div className="flex mt-2 text-center">
					<Button variant="contained" className="w-full">
						Place bid
					</Button>
				</div>
			</div>
		</div>
	)
}

export default PlaceBid
