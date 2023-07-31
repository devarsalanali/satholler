import Button from "../components/Button"
import nft from "../assets/images/nft.png"
import PlaceBid from "../components/dialogs/PlaceBid"
import Modal from "../components/dialogs/Modal"
import { useState, useEffect } from "react"
import AccordionItem from "../components/accordion/AccordionItem"
import { calculateTimeLeft } from "../utilities/calculateTimeLeft"
import ConnectWallet from "../components/dialogs/ConnectWallet"
import Participate from "../components/dialogs/Participate"
import Info from "../components/dialogs/Info"

export default function AuctionDetails() {
	const [bidModal, setBidModal] = useState(false)

	const targetDateTime = "2023-08-01T12:00:00"
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDateTime))
	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft(targetDateTime))
		}, 1000)
		return () => clearInterval(timer)
	}, [targetDateTime])

	// Dynamically control the data when connected to DB.
	const [isConnected, setIsConnected] = useState(false)
	const [walletModal, setWalletModal] = useState(false)
	const [participateModal, setParticipateModal] = useState(false)
	const [confirmParticipate, setConfirmParticipate] = useState(false)
	const [bidPlaced, setBidPlaced] = useState(false)

	// Check for wallet connection
	useEffect(() => {
		if (isConnected) {
			setWalletModal(false)
			setParticipateModal(true)
		}
	}, [isConnected])

	// Check for confirm participation
	useEffect(() => {
		if (confirmParticipate) {
			setParticipateModal(false)
			setBidModal(true)
		}
	}, [confirmParticipate])

	// Check if bid is placed
	useEffect(() => {
		if (bidPlaced) {
			setBidModal(false)
			setBidPlaced(true)
		}
	}, [bidPlaced])

	return (
		<>
			<div className="container mx-auto px-4 lg:px-20 mt-10">
				<div className="grid md:grid-cols-2 gap-5">
					<div className="nft-preview bg-secondary-300 p-2 rounded-lg max-h-[35rem] border-primary-800 border-[1px]">
						<img
							src={nft}
							className="w-full h-full object-cover rounded-lg"
							alt="nft"
						/>
					</div>
					<div className="details ">
						<div className="meta mb-2 font-light">
							<h2 className="text-3xl md:text-4xl ff-alro">Item Name #222</h2>
							<h5>Collection Name</h5>
							<h5 className="text-primary-500">#450000 - #450000</h5>
							<h5>
								Owned by <span className="text-primary-500">Owner Name</span>
							</h5>
						</div>
						<div className="bg-secondary-300 p-4 md:p-6 rounded-lg border-primary-800 border-[1px] relative before:content=[''] before:z-[-1] before:absolute before:inset-[-2px] before:rounded-lg before:bg-gradient-to-br before:from-[#75E452] before:to-[#75E45200] before:outline before:outline-[#050D11] before:outline-offset-2 before:outline-3">
							<div className="overview grid md:grid-cols-2 mb-6 gap-5 md:gap-8">
								<div className="">
									<h4 className="text-xl mb-4">Auction Ends In</h4>
									<div className="grid grid-cols-4 text-center text-sm">
										<h5>
											{timeLeft.days} <br />
											<span className="text-slate-400">Days</span>
										</h5>
										<h5>
											{timeLeft.hours} <br />
											<span className="text-slate-400">Hours</span>
										</h5>
										<h5>
											{timeLeft.minutes} <br />
											<span className="text-slate-400">Mins</span>
										</h5>
										<h5>
											{timeLeft.seconds} <br />
											<span className="text-slate-400">Sec</span>
										</h5>
									</div>
								</div>
								<div className="md:flex flex-col">
									<h5 className="mb-3">Minimum Bid 0.0005 BTC</h5>
									<Button
										variant="contained"
										className="text-center"
										onClick={() => setWalletModal(!walletModal)}
									>
										Connect Now
									</Button>
								</div>
							</div>
							<hr className="border-gray-600" />
							<h4 className="my-4 text-md">Recent Bids</h4>
							<hr className="border-gray-600" />
							<table className="w-full font-light mt-5  border-spacing-[20px] table-auto max-md:text-sm">
								<tbody>
									{/* Heading */}
									<tr className="align-top text-slate-300 h-8 border-b-[1px] border-gray-600">
										<td>Price</td>
										<td>Floor Difference</td>
										<td>Time</td>
										<td>From</td>
									</tr>
									{/* Data */}
									<tr className="align-center text-slate-400 border-b-[1px] border-gray-600 h-10">
										<td className="text-white">0.004 BTC</td>
										<td>0.004 BTC</td>
										<td>4h Ago</td>
										<td className="text-primary-300">niftking</td>
									</tr>
									<tr className="align-center text-slate-400 border-b-[1px] border-gray-600 h-10">
										<td className="text-white">0.004 BTC</td>
										<td>0.004 BTC</td>
										<td>4h Ago</td>
										<td className="text-primary-300">niftking</td>
									</tr>
									<tr className="align-center text-slate-400 border-b-[1px] border-gray-600 h-10">
										<td className="text-white">0.004 BTC</td>
										<td>0.004 BTC</td>
										<td>4h Ago</td>
										<td className="text-primary-300">niftking</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div
							id="accordion-collapse"
							data-accordion="collapse"
							className="mt-5"
						>
							<AccordionItem
								title="Description"
								titleClass="rounded-t-lg bg-secondary-300"
							>
								<p className="mb-2 text-gray-400">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Adipisci dolor atque illo! At ad enim nihil. Nesciunt id
									tempore magnam?
								</p>
								<p className="text-gray-400">
									Check out this guide to learn how to{" "}
									<a href="#" className="text-blue-500 hover:underline">
										get started
									</a>{" "}
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Magni, adipisci.
								</p>
							</AccordionItem>
							<AccordionItem title="Description">
								<p className="mb-2 text-gray-400">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Adipisci dolor atque illo! At ad enim nihil. Nesciunt id
									tempore magnam?
								</p>
								<p className="text-gray-400">
									Check out this guide to learn how to{" "}
									<a href="#" className="text-blue-500 hover:underline">
										get started
									</a>{" "}
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Magni, adipisci.
								</p>
							</AccordionItem>
							<AccordionItem title="Description" titleClass="rounded-b-lg">
								<p className="mb-2 text-gray-400">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Adipisci dolor atque illo! At ad enim nihil. Nesciunt id
									tempore magnam?
								</p>
								<p className="text-gray-400">
									Check out this guide to learn how to{" "}
									<a href="#" className="text-blue-500 hover:underline">
										get started
									</a>{" "}
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Magni, adipisci.
								</p>
							</AccordionItem>
						</div>
					</div>
				</div>
			</div>
			{/* Modals */}
			<Modal
				id="walletModal"
				isOpen={walletModal}
				setIsOpen={setWalletModal}
				title="Connect Wallet"
				titleProps="lg:text-2xl"
			>
				<ConnectWallet isWalletConnected={setIsConnected} />
			</Modal>
			<Modal
				id="participateModal"
				isOpen={participateModal}
				setIsOpen={setParticipateModal}
			>
				<Participate setConfirmParticipate={setConfirmParticipate} />
			</Modal>
			<Modal id="bidModal" isOpen={bidModal} setIsOpen={setBidModal}>
				<PlaceBid setBidPlaced={setBidPlaced} />
			</Modal>
			<Modal id="infoModal" isOpen={bidPlaced} setIsOpen={setBidPlaced}>
				<Info />
			</Modal>
		</>
	)
}
