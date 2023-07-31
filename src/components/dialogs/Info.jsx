function Info() {
	return (
		<div className="body text-center py-4">
			<div className="flex justify-center items-center gap-5">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 30 30"
					fill="none"
				>
					<path
						d="M15 0C6.75 0 0 6.75 0 15C0 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 0 15 0ZM15 27C8.385 27 3 21.615 3 15C3 8.385 8.385 3 15 3C21.615 3 27 8.385 27 15C27 21.615 21.615 27 15 27ZM21.885 8.37L12 18.255L8.115 14.385L6 16.5L12 22.5L24 10.5L21.885 8.37Z"
						fill="#2A7C3C"
					/>
				</svg>
				<h3 className="text-[#50C878] text-2xl font-medium">Success !</h3>
			</div>
			<h4 className="text-gray-400 text-lg mt-2">Bid Successful</h4>
		</div>
	)
}

export default Info
