import Button from "../components/Button"
import nft from "../assets/images/nft.png"

export default function ItemDetails() {
	return (
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
					<div className="bg-secondary-300 p-4 md:p-6 rounded-lg border-primary-800 border-[1px]">
						<div className="overview grid md:grid-cols-2 mb-6 gap-5 md:gap-8">
							<div className="">
								<h4 className="text-xl mb-4">Auction Ends In</h4>
								<div className="grid grid-cols-4 text-center text-sm">
									<h5>
										3 <br />
										<span className="text-slate-400">Days</span>
									</h5>
									<h5>
										22 <br />
										<span className="text-slate-400">Hours</span>
									</h5>
									<h5>
										43 <br />
										<span className="text-slate-400">Mins</span>
									</h5>
									<h5>
										53 <br />
										<span className="text-slate-400">Sec</span>
									</h5>
								</div>
							</div>
							<div className="md:flex flex-col">
								<h5 className="mb-3">Minimum Bid 0.0005 BTC</h5>
								<Button variant="contained" className="text-center">
									Bid Now
								</Button>
							</div>
						</div>
						<hr className="border-gray-600" />
						<h4 className="my-4 text-md">Recent Bids</h4>
						<hr className="border-gray-600" />
						<table className="w-full font-light mt-5  border-spacing-[20px] table-auto max-md:text-sm">
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
						</table>
					</div>
					<div
						id="accordion-collapse"
						data-accordion="collapse"
						className="mt-5"
					>
						{/* 1st Item */}
						<h2 id="accordion-collapse-heading-1">
							<button
								type="button"
								className="flex items-center justify-between w-full p-5 text-left bg-secondary-300 rounded-t-lg border-[1px] border-primary-800"
								data-accordion-target="#accordion-collapse-body-1"
								aria-expanded="true"
								aria-controls="accordion-collapse-body-1"
							>
								<span>Description</span>
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
							<div className="bg-secondary-500 p-5  border-x-[1px] border-b-2 border-primary-800">
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
							</div>
						</div>
						{/* 2nd Item */}
						<h2 id="accordion-collapse-heading-2">
							<button
								type="button"
								className="flex items-center justify-between w-full p-5 text-left bg-secondary-300 border-[1px] border-primary-800"
								data-accordion-target="#accordion-collapse-body-2"
								aria-expanded="true"
								aria-controls="accordion-collapse-body-2"
							>
								<span>Description</span>
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
							<div className="bg-secondary-500 p-5  border-x-[1px] border-b-2 border-primary-800">
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
							</div>
						</div>
						{/* 2nd Item */}
						<h2 id="accordion-collapse-heading-3">
							<button
								type="button"
								className="flex items-center justify-between w-full p-5 text-left bg-secondary-300 border-[1px] border-primary-800 rounded-b-lg"
								data-accordion-target="#accordion-collapse-body-3"
								aria-expanded="true"
								aria-controls="accordion-collapse-body-3"
							>
								<span>Description</span>
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
							<div className="bg-secondary-500 p-5 rounded-b-lg  border-x-[1px] border-b-2 border-primary-800">
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
