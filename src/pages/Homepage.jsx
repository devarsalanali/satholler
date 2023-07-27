import { useState } from "react"
import Button from "../components/Button"

import carouselImage1 from "../assets/images/slide-1.png"
import hostIcon from "../assets/images/host-icon.png"
import checkIcon from "../assets/images/purple-check.svg"
import ToggleSwitch from "../components/ToggleSwitch"
import UpcomingCard from "../components/cards/UpcomingCard"
import StepCard from "../components/StepCard"

import step1 from "../assets/images/step-1.png"
import step2 from "../assets/images/step-2.png"
import step3 from "../assets/images/step-3.png"

import Carousel from "../components/Carousel"
import Counter from "../components/Counter"
import ExpiredCard from "../components/cards/ExpiredCard"
import { useNavigation } from "react-router-dom"
import Modal from "../components/dialogs/Modal"

// Dialogs
import Participate from "../components/dialogs/Participate"
import AccordionItem from "../components/accordion/AccordionItem"
import Info from "../components/cards/Info"

export default function Homepage() {
	// Countdown to this date
	const targetDateTime = "2023-08-01T12:00:00"

	// For filtering cards
	const [activeTab, setActiveTab] = useState("upcoming")

	// False means hidden
	const [auctionModal, setAuctionModal] = useState(false)
	const [infoModal, setInfoModal] = useState(false)

	return (
		<>
			<div className="container mx-auto px-4 lg:px-20">
				<section className="hero mt-10">
					<div className="grid md:grid-cols-2 gap-5 items-center">
						<h1 className="ff-alro text-5xl lg:text-7xl font-bold">
							SatHoller - the first
							<span className="text-primary-500"> Ordianls </span>Auction House
						</h1>
						<Carousel />
					</div>
					<div className="mt-2  lg:mt-5 max-md:text-center">
						<Button variant="contained" to="/bid-details">
							Participate Now
						</Button>
						<Button
							variant="outlined"
							className="ms-2"
							onClick={() => setInfoModal(!infoModal)}
						>
							Apply for listing
						</Button>
					</div>
				</section>
				<section className="my-20">
					<h3 className="ff-alro text-4xl font-bold text-center mb-8">
						Holler our your <span className="text-primary-400">bid</span>
					</h3>
					<div className="slider">
						<div className="item overflow-hidden rounded-md h-[25rem] relative after:content=[''] after:absolute after:inset-x-0 after:inset-y-0 after:bg-slate-800 after:opacity-[0.3] after:z-[-1]">
							<img
								src={carouselImage1}
								className="h-full object-center object-cover w-full absolute inset-x-0 inset-y-0 z-[-1]"
								alt="slide 1"
							/>
							<div className="md:grid md:grid-rows-2 z-index-[1] p-4 md:p-10">
								<div className="metadata">
									<img
										src={hostIcon}
										alt="organizer host logo"
										className="mb-5"
									/>
									<h3 className="text-3xl md:text-4xl font-medium mb-2">
										Item Name
									</h3>
									<div className="flex gap-2">
										<h6>Collection Name</h6>{" "}
										<img src={checkIcon} alt="purple check mark" />
									</div>
									<h6>Details</h6>
									<h3 className="text-2xl md:text-3xl font-medium mb-2 mt-4">
										Auction Ends In
									</h3>
									<Counter targetDateTime={targetDateTime} />
								</div>
								<div className="text-end max-md:mt-10">
									<Button
										variant="contained"
										onClick={() => {
											setAuctionModal(true)
										}}
									>
										Participate
									</Button>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="my-20 pt-10 mt-[-10]" id="bids">
					<div className="head grid md:grid-cols-3 justify-center md:justify-between max-md:mb-5">
						<ToggleSwitch
							className="max-md:order-2"
							setActiveTab={setActiveTab}
							activeTab={activeTab}
						/>
						<h3 className="ff-alro text-4xl font-bold text-center mb-8">
							Participate <span className="text-primary-400">Now</span>
						</h3>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
						{activeTab === "upcoming" ? (
							<>
								<UpcomingCard />
								<UpcomingCard />
								<UpcomingCard />
								<UpcomingCard />
								<UpcomingCard />
								<UpcomingCard />
								<UpcomingCard />
								<UpcomingCard />
							</>
						) : (
							<>
								<ExpiredCard />
								<ExpiredCard />
							</>
						)}
					</div>
				</section>
				<section className="my-20 lg:mx-20 pt-10 mt-[-10]" id="how-it-works">
					<div className="head mb-10 text-center">
						<h3 className="ff-alro text-4xl font-bold text-center mb-4">
							Secure and Easy <span className="text-primary-400">Bidding</span>
						</h3>
						<p className="text-slate-300">
							SatHollar is the premier minting platform for safety, scale, and
							success for minting ordinals
						</p>
					</div>
					<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10">
						<StepCard img={step1} />
						<StepCard img={step2} />
						<StepCard img={step3} />
					</div>
				</section>
				<section className="my-20 bg-gradient-to-r from-[#0A1919] to-[#266040] p-4 md:p-8 rounded-lg border-[#266040] border-2">
					<div className="grid md:grid-cols-4">
						<div className="col col-span-2">
							<h4 className="text-2xl ff-alro mb-2">Apply For Auction</h4>
							<p className="text-slate-300">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
								aliquid iure, est repellendus velit repudiandae. Doloribus quis
								atque nobis quaerat ullam?
							</p>
						</div>
						<div className="hidden md:block"></div>
						<div className="flex items-center max-md:mt-3 justify-end">
							<button
								href="#"
								className="bg-gray-100 text-gray-800 p-2 px-3 rounded-[10px]"
							>
								Apply For Auction
							</button>
						</div>
					</div>
				</section>
				<section className="my-20 pt-10 mt-[-10]" id="faq">
					<div className="head mb-10 text-center">
						<h3 className="ff-alro text-4xl font-bold text-center mb-4">
							Frequently Asked{" "}
							<span className="text-primary-400">Questions</span>
						</h3>
					</div>
					<div id="accordion-collapse" data-accordion="collapse">
						<AccordionItem
							title="What is Auctions?"
							titleClass="rounded-lg"
							bodyClass="rounded-b-lg"
							gradient={true}
						>
							<p className="mb-2 text-gray-400">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Adipisci dolor atque illo! At ad enim nihil. Nesciunt id tempore
								magnam?
							</p>
							<p className="text-gray-400">
								Check out this guide to learn how to{" "}
								<a href="#" className="text-blue-500 hover:underline">
									get started
								</a>{" "}
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
								adipisci.
							</p>
						</AccordionItem>
						<AccordionItem
							title="What is Auctions?"
							titleClass="rounded-lg"
							bodyClass="rounded-b-lg"
							className="mt-4"
							gradient={true}
						>
							<p className="mb-2 text-gray-400">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Adipisci dolor atque illo! At ad enim nihil. Nesciunt id tempore
								magnam?
							</p>
							<p className="text-gray-400">
								Check out this guide to learn how to{" "}
								<a href="#" className="text-blue-500 hover:underline">
									get started
								</a>{" "}
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
								adipisci.
							</p>
						</AccordionItem>
						<AccordionItem
							title="What is Auctions?"
							titleClass="rounded-lg"
							bodyClass="rounded-b-lg"
							className="mt-4"
							gradient={true}
						>
							<p className="mb-2 text-gray-400">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Adipisci dolor atque illo! At ad enim nihil. Nesciunt id tempore
								magnam?
							</p>
							<p className="text-gray-400">
								Check out this guide to learn how to{" "}
								<a href="#" className="text-blue-500 hover:underline">
									get started
								</a>{" "}
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
								adipisci.
							</p>
						</AccordionItem>
					</div>
				</section>
			</div>
			{/* Modals */}
			<Modal
				id="auctionModal"
				isOpen={auctionModal}
				setIsOpen={setAuctionModal}
				title="Participate in Auction"
			>
				<Participate />
			</Modal>
			<Modal
				id="infoModal"
				isOpen={infoModal}
				setIsOpen={setInfoModal}
				title=""
				className="w-[25rem]"
			>
				<Info message="Bid Successful" />
			</Modal>
		</>
	)
}
