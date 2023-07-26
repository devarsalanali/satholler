// tailwind.config.js
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#E0F8E7",
					200: "#C2F0D1",
					300: "#93E2AE",
					400: "#50C878", // Original Color
					500: "#36B15F",
					600: "#27924C",
					700: "#22733D",
					800: "#205B34",
					900: "#1C4B2E",
				},
				secondary: {
					300: "#1D2A39",
					500: "#141B23",
					700: "#0C131A",
				},
			},
		},
	},
	plugins: [],
}
