import hiroLogo from "../../assets/images/hiro.png"

// Using isOpen to close modal
export default function ConnectWallet({ isWalletConnected }) {
	return (
		<div className="">
			<hr className="border-gray-600 my-2" />
			<p className="text-gray-400">
				Choose how you want to connect. If you don't have a wallet, you can
				select a provider and create one.
			</p>
			<div className="border-[1px] border-gray-600 flex items-center gap-5 px-4 py-3 rounded-lg mt-10">
				<img
					src={hiroLogo}
					alt=""
					className="w-[5rem] h-[5rem] object-cover rounded-lg"
				/>
				<h4
					className="text-lg cursor-pointer"
					onClick={() => isWalletConnected(true)}
				>
					Hiro
				</h4>
			</div>
		</div>
	)
}
