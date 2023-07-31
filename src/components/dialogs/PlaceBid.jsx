import placeBid from "../../assets/images/place-bid-item.png"
import Button from "../Button"

function PlaceBid({ setBidPlaced }) {
	return (
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
				<Button
					variant="contained"
					className="w-full"
					onClick={() => setBidPlaced(true)}
				>
					Place bid
				</Button>
			</div>
		</div>
	)
}

export default PlaceBid
