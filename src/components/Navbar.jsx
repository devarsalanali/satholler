import { Link } from "react-router-dom"
import logo from "../assets/images/Union.svg"
import { useState } from "react"
import Modal from "./dialogs/Modal"
import ConnectWallet from "./cards/ConnectWallet"

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	const toggleOpen = () => {
		setIsOpen(!isOpen)
	}

	const [walletModal, setWalletModal] = useState(false)
	return (
		<>
			<nav>
				<div className="max-w-screen-xl flex flex-wrap md:flex-nowrap items-center justify-between mx-auto p-4 md:justify-between">
					<Link to="/" className="flex items-center md:me-[5rem]">
						<img src={logo} className="h-8 mr-3" alt="Auction Logo" />
						<span className="self-center text-2xl font-semibold whitespace-nowrap">
							Auction
						</span>
					</Link>
					<button
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-default"
						onClick={toggleOpen}
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
					<div
						className={`${!isOpen ? "hidden" : ""} w-full md:block`}
						id="navbar-default"
					>
						<div className="rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 border-gray-700 p-4 md:p-0 mt-4 border md:bg-transparent md:flex md:justify-between">
							<ul className="font-medium flex flex-col md:flex-row md:gap-7 md:ms-20 items-center">
								<li>
									<Link
										to="/"
										className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-primary-400 md:p-0 text-white md:hover:text-primary-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
									>
										Home
									</Link>
								</li>
								<li>
									<a
										href="#bids"
										className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-primary-400 md:p-0 text-white md:hover:text-primary-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
									>
										Auctions
									</a>
								</li>
								<li>
									<a
										href="#how-it-works"
										className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-primary-400 md:p-0 text-white md:hover:text-primary-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
									>
										How it Works
									</a>
								</li>
								<li>
									<a
										href="#faq"
										className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-primary-400 md:p-0 text-white md:hover:text-primary-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
									>
										FAQ
									</a>
								</li>
							</ul>
							<button
								className="block py-2 pl-3 pr-4 bg-primary-400 rounded-[10px] md:p-2 md:px-3 text-black md:hover:bg-primary-600 text-center mx-auto"
								onClick={() => setWalletModal(!walletModal)}
							>
								Apply For Auction
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Modals */}
			<Modal
				id="walletModal"
				isOpen={walletModal}
				setIsOpen={setWalletModal}
				title="Connect Wallet"
				titleProps="lg:text-2xl"
			>
				<ConnectWallet />
			</Modal>
		</>
	)
}
