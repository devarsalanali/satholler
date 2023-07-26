import logo from "../assets/images/Union.svg"

export default function Navbar() {
	return (
		<nav>
			<div class="max-w-screen-xl flex flex-wrap md:flex-nowrap items-center justify-between mx-auto p-4 md:justify-between">
				<a href="#" class="flex items-center md:me-[5rem]">
					<img src={logo} class="h-8 mr-3" alt="Auction Logo" />
					<span class="self-center text-2xl font-semibold whitespace-nowrap">
						Auction
					</span>
				</a>
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div class="hidden w-full md:block" id="navbar-default">
					<div className="rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 border-gray-700 p-4 md:p-0 mt-4 border md:bg-transparent md:flex md:justify-between">
						<ul class="font-medium flex flex-col md:flex-row md:gap-3 md:ms-20 items-center">
							<li>
								<a
									href="#"
									class="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-primary-400 md:p-0 text-white md:hover:text-primary-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#"
									class="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-primary-400 md:p-0 text-white md:hover:text-primary-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
								>
									Auctions
								</a>
							</li>
							<li>
								<a
									href="#"
									class="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-primary-400 md:p-0 text-white md:hover:text-primary-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
								>
									How it Works
								</a>
							</li>
							<li>
								<a
									href="#"
									class="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-primary-400 md:p-0 text-white md:hover:text-primary-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
								>
									FAQ
								</a>
							</li>
						</ul>
						<a
							href="#"
							class="block py-2 pl-3 pr-4 bg-primary-400 rounded-[10px] md:p-2 md:px-3 text-black md:hover:bg-primary-600"
						>
							Apply For Auction
						</a>
					</div>
				</div>
			</div>
		</nav>
	)
}
