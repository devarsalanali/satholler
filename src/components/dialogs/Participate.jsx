import placeBid from "../../assets/images/place-bid-item.png"
import Button from "../Button"

function Participate({ id }) {
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
					<h5>Bit starts in</h5>
					<h5>4 Days</h5>
				</div>
			</div>

			<div className="flex mt-2 text-center">
				<Button variant="contained" className="w-full">
					Confirm Participation
				</Button>
			</div>
		</div>
	)
}

export default Participate
