import React from "react"

export default function Footer() {
	return (
		<footer>
			<div className="container text-center mb-2 md:flex justify-between items-center mx-auto">
				<h4 className="mb-2">&copy;Copyright 2023 SatHoller</h4>
				<div className="flex gap-2 justify-center">
					<div className="border-2 border-white rounded-full w-9 h-9 flex justify-center items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 27 26"
							fill="none"
						>
							<path
								d="M0.505217 26L2.26282 19.5416C1.1047 17.5563 0.496242 15.2984 0.500017 13C0.500017 5.8201 6.32011 0 13.5 0C20.6799 0 26.5 5.8201 26.5 13C26.5 20.1799 20.6799 26 13.5 26C11.2026 26.0037 8.94566 25.3957 6.96101 24.2385L0.505217 26ZM8.80831 6.9004C8.64043 6.91082 8.47639 6.95504 8.32601 7.0304C8.18499 7.11025 8.05626 7.21009 7.94381 7.3268C7.78781 7.4737 7.69941 7.60109 7.60451 7.72459C7.12405 8.34989 6.86561 9.11744 6.87001 9.90599C6.87261 10.543 7.03901 11.1631 7.29901 11.7429C7.83071 12.9155 8.70561 14.157 9.86131 15.3075C10.1395 15.5844 10.4112 15.8626 10.7037 16.1213C12.1381 17.3842 13.8474 18.2949 15.6957 18.7811L16.4354 18.8942C16.6759 18.9072 16.9164 18.889 17.1582 18.8773C17.5368 18.8577 17.9065 18.7552 18.2411 18.577C18.4113 18.4893 18.5775 18.3939 18.739 18.291C18.739 18.291 18.7949 18.2546 18.9015 18.174C19.077 18.044 19.1849 17.9517 19.3305 17.7996C19.4384 17.6878 19.532 17.5565 19.6035 17.407C19.7049 17.1951 19.8063 16.7908 19.8479 16.4541C19.8791 16.1967 19.87 16.0563 19.8661 15.9692C19.8609 15.8301 19.7452 15.6858 19.6191 15.6247L18.8625 15.2854C18.8625 15.2854 17.7315 14.7927 17.0412 14.4781C16.9684 14.4464 16.8904 14.4283 16.8111 14.4248C16.7222 14.4157 16.6323 14.4257 16.5475 14.4541C16.4628 14.4826 16.3851 14.5289 16.3197 14.5899V14.5873C16.3132 14.5873 16.2261 14.6614 15.2862 15.8002C15.2323 15.8727 15.158 15.9275 15.0728 15.9576C14.9876 15.9877 14.8953 15.9917 14.8078 15.9692C14.7231 15.9465 14.6401 15.9179 14.5595 15.8834C14.3983 15.8158 14.3424 15.7898 14.2319 15.7417L14.2254 15.7391C13.4817 15.4144 12.7931 14.9758 12.1844 14.4391C12.0206 14.2961 11.8685 14.1401 11.7125 13.9893C11.2011 13.4995 10.7553 12.9454 10.3865 12.3409L10.3098 12.2174C10.2547 12.1344 10.2102 12.0449 10.1772 11.9509C10.1278 11.7598 10.2565 11.6064 10.2565 11.6064C10.2565 11.6064 10.5724 11.2606 10.7193 11.0734C10.8416 10.9178 10.9557 10.756 11.0612 10.5885C11.2146 10.3415 11.2627 10.088 11.1821 9.89169C10.8181 9.00249 10.4411 8.11719 10.0537 7.23839C9.97701 7.0642 9.74951 6.93939 9.54281 6.91469C9.47261 6.9069 9.40241 6.8991 9.33221 6.8939C9.15763 6.88522 8.98269 6.88696 8.80831 6.8991V6.9004Z"
								fill="white"
							/>
						</svg>
					</div>
					<div className="border-2 border-white rounded-full w-9 h-9 flex justify-center items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="12"
							height="22"
							viewBox="0 0 12 22"
							fill="none"
						>
							<path
								d="M10.7792 12.3118L11.3498 8.5115H7.78305V6.04531C7.78305 5.00581 8.28113 3.99191 9.87869 3.99191H11.5V0.756594C11.5 0.756594 10.0289 0.5 8.62195 0.5C5.68485 0.5 3.76508 2.32044 3.76508 5.61547V8.51216H0.5V12.3125H3.76508V21.5H7.78305V12.3125L10.7792 12.3118Z"
								fill="white"
							/>
						</svg>
					</div>
					<div className="border-2 border-white rounded-full w-9 h-9 flex justify-center items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="21"
							height="20"
							viewBox="0 0 21 20"
							fill="none"
						>
							<path
								d="M10.4973 6.66525C8.66111 6.66525 7.16262 8.16376 7.16262 10C7.16262 11.8362 8.66111 13.3348 10.4973 13.3348C12.3335 13.3348 13.832 11.8362 13.832 10C13.832 8.16376 12.3335 6.66525 10.4973 6.66525ZM20.4989 10C20.4989 8.61907 20.5114 7.25064 20.4338 5.87221C20.3563 4.27113 19.9911 2.85017 18.8203 1.67938C17.647 0.506085 16.2286 0.14334 14.6275 0.065788C13.2466 -0.0117644 11.8782 0.000744113 10.4998 0.000744113C9.11891 0.000744113 7.75051 -0.0117644 6.3721 0.065788C4.77105 0.14334 3.35012 0.508587 2.17935 1.67938C1.00608 2.85267 0.643338 4.27113 0.565787 5.87221C0.488236 7.25314 0.500744 8.62157 0.500744 10C0.500744 11.3784 0.488236 12.7494 0.565787 14.1278C0.643338 15.7289 1.00858 17.1498 2.17935 18.3206C3.35262 19.4939 4.77105 19.8567 6.3721 19.9342C7.75301 20.0118 9.12141 19.9993 10.4998 19.9993C11.8807 19.9993 13.2491 20.0118 14.6275 19.9342C16.2286 19.8567 17.6495 19.4914 18.8203 18.3206C19.9936 17.1473 20.3563 15.7289 20.4338 14.1278C20.5139 12.7494 20.4989 11.3809 20.4989 10ZM10.4973 15.131C7.65795 15.131 5.36644 12.8394 5.36644 10C5.36644 7.16058 7.65795 4.86903 10.4973 4.86903C13.3367 4.86903 15.6282 7.16058 15.6282 10C15.6282 12.8394 13.3367 15.131 10.4973 15.131ZM15.8383 5.8572C15.1754 5.8572 14.64 5.32184 14.64 4.65889C14.64 3.99594 15.1754 3.46058 15.8383 3.46058C16.5013 3.46058 17.0366 3.99594 17.0366 4.65889C17.0368 4.81631 17.0059 4.97222 16.9458 5.1177C16.8856 5.26317 16.7974 5.39535 16.6861 5.50666C16.5748 5.61798 16.4426 5.70624 16.2971 5.76639C16.1516 5.82654 15.9957 5.8574 15.8383 5.8572Z"
								fill="white"
							/>
						</svg>
					</div>
					<div className="border-2 border-white rounded-full w-9 h-9 flex justify-center items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="18"
							viewBox="0 0 25 18"
							fill="none"
						>
							<path
								d="M23.9991 3.15557C23.8625 2.64135 23.5946 2.1724 23.2223 1.79567C22.85 1.41894 22.3863 1.14764 21.8777 1.00892C20.0054 0.5 12.5 0.5 12.5 0.5C12.5 0.5 4.99464 0.5 3.12232 1.00621C2.61345 1.14448 2.14953 1.41563 1.77716 1.79243C1.40479 2.16923 1.13707 2.63842 1.00089 3.15287C0.5 5.04777 0.5 9 0.5 9C0.5 9 0.5 12.9522 1.00089 14.8444C1.27679 15.8893 2.09107 16.7123 3.12232 16.9911C4.99464 17.5 12.5 17.5 12.5 17.5C12.5 17.5 20.0054 17.5 21.8777 16.9911C22.9116 16.7123 23.7232 15.8893 23.9991 14.8444C24.5 12.9522 24.5 9 24.5 9C24.5 9 24.5 5.04777 23.9991 3.15557ZM10.1161 12.6274V5.37261L16.3304 8.97293L10.1161 12.6274Z"
								fill="white"
							/>
						</svg>
					</div>
				</div>
			</div>
		</footer>
	)
}