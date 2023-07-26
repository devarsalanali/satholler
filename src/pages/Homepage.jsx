import React from "react"
import cards from "../assets/images/hero/cards.png"
import Button from "../components/Button"

import carouselImage1 from "../assets/images/slide-1.png"
import hostIcon from "../assets/images/host-icon.png"
import checkIcon from "../assets/images/purple-check.svg"
import ToggleSwitch from "../components/ToggleSwitch"
import Card from "../components/Card"
import StepCard from "../components/StepCard"

import step1 from "../assets/images/step-1.png"
import step2 from "../assets/images/step-2.png"
import step3 from "../assets/images/step-3.png"
import Footer from "../components/Footer"

export default function Homepage() {
	return (
		<div className="container mx-auto px-4 lg:px-20">
			<section className="hero mt-10">
				<div className="grid md:grid-cols-2 gap-5">
					<h1 className="ff-alro text-5xl lg:text-7xl font-bold">
						SatHoller - the first
						<span className="text-primary-500"> Ordianls </span>Auction House
					</h1>
					<img
						src={cards}
						alt="NFT cards"
						className="max-md:mx-auto md:ms-auto"
					/>
				</div>
				<div className="max-md:mt-10 max-md:text-center">
					<Button variant="contained">Participate Now</Button>
					<Button variant="outlined" className="ms-2">
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
								<div className="flex gap-2">
									<div className="bg-slate-800 text-center w-[56px] h-[56px] rounded-[10px] flex items-center justify-center">
										3 <br /> Days
									</div>
									<div className="bg-slate-800 text-center w-[56px] h-[56px] rounded-[10px] flex items-center justify-center">
										14 <br /> Hours
									</div>
									<div className="bg-slate-800 text-center w-[56px] h-[56px] rounded-[10px] flex items-center justify-center">
										32 <br /> Mins
									</div>
									<div className="bg-slate-800 text-center w-[56px] h-[56px] rounded-[10px] flex items-center justify-center">
										45 <br /> Sec
									</div>
								</div>
							</div>
							<div className="text-end max-md:mt-10">
								<Button variant="contained">Participate</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="my-20">
				<div className="head grid md:grid-cols-3 justify-center md:justify-between max-md:mb-5">
					<ToggleSwitch className="max-md:order-2" />
					<h3 className="ff-alro text-4xl font-bold text-center mb-8">
						Participate <span className="text-primary-400">Now</span>
					</h3>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</section>
			<section className="my-20 lg:mx-20">
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
						<a
							href="#"
							className="bg-gray-100 text-gray-800 p-2 px-3 rounded-[10px]"
						>
							Apply For Auction
						</a>
					</div>
				</div>
			</section>
			<section className="my-20">
				<div className="head mb-10 text-center">
					<h3 className="ff-alro text-4xl font-bold text-center mb-4">
						Frequently Asked <span className="text-primary-400">Questions</span>
					</h3>
				</div>
				<div id="accordion-collapse" data-accordion="collapse">
					<h2 id="accordion-collapse-heading-1">
						<button
							type="button"
							className="flex items-center justify-between w-full p-5 text-left bg-secondary-500 rounded-lg border-2 border-[#26603F]"
							data-accordion-target="#accordion-collapse-body-1"
							aria-expanded="true"
							aria-controls="accordion-collapse-body-1"
						>
							<span>What is Auctions?</span>
							<svg
								data-accordion-icon
								className="w-3 h-3 rotate-180 shrink-0"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 6"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5 5 1 1 5"
								/>
							</svg>
						</button>
					</h2>
					<div
						id="accordion-collapse-body-1"
						className="hidden"
						aria-labelledby="accordion-collapse-heading-1"
					>
						<div className="bg-secondary-500 p-5 rounded-b-lg mt-[-20px] border-x-2 border-b-2 border-[#26603F]">
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
						</div>
					</div>

					{/* Second Item */}
					<h2 id="accordion-collapse-heading-2" className="mt-5">
						<button
							type="button"
							className="flex items-center justify-between w-full p-5 text-left bg-secondary-500 rounded-lg border-2 border-[#26603F]"
							data-accordion-target="#accordion-collapse-body-2"
							aria-expanded="true"
							aria-controls="accordion-collapse-body-2"
						>
							<span>What is Auctions?</span>
							<svg
								data-accordion-icon
								className="w-3 h-3 rotate-180 shrink-0"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 6"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5 5 1 1 5"
								/>
							</svg>
						</button>
					</h2>
					<div
						id="accordion-collapse-body-2"
						className="hidden"
						aria-labelledby="accordion-collapse-heading-2"
					>
						<div className="bg-secondary-500 p-5 rounded-b-lg mt-[-20px] border-x-2 border-b-2 border-[#26603F]">
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
						</div>
					</div>

					{/* Third Item */}
					<h2 id="accordion-collapse-heading-3" className="mt-5">
						<button
							type="button"
							className="flex items-center justify-between w-full p-5 text-left bg-secondary-500 rounded-lg border-2 border-[#26603F]"
							data-accordion-target="#accordion-collapse-body-3"
							aria-expanded="true"
							aria-controls="accordion-collapse-body-3"
						>
							<span>What is Auctions?</span>
							<svg
								data-accordion-icon
								className="w-3 h-3 rotate-180 shrink-0"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 6"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5 5 1 1 5"
								/>
							</svg>
						</button>
					</h2>
					<div
						id="accordion-collapse-body-3"
						className="hidden"
						aria-labelledby="accordion-collapse-heading-3"
					>
						<div className="bg-secondary-500 p-5 rounded-b-lg mt-[-20px] border-x-2 border-b-2 border-[#26603F]">
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
						</div>
					</div>

					{/* Fourth Item */}
					<h2 id="accordion-collapse-heading-3" className="mt-5">
						<button
							type="button"
							className="flex items-center justify-between w-full p-5 text-left bg-secondary-500 rounded-lg border-2 border-[#26603F]"
							data-accordion-target="#accordion-collapse-body-4"
							aria-expanded="true"
							aria-controls="accordion-collapse-body-4"
						>
							<span>What is Auctions?</span>
							<svg
								data-accordion-icon
								className="w-3 h-3 rotate-180 shrink-0"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 6"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5 5 1 1 5"
								/>
							</svg>
						</button>
					</h2>
					<div
						id="accordion-collapse-body-4"
						className="hidden"
						aria-labelledby="accordion-collapse-heading-4"
					>
						<div className="bg-secondary-500 p-5 rounded-b-lg mt-[-20px] border-x-2 border-b-2 border-[#26603F]">
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
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
