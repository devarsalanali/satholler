import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import "./App.css"
import Footer from "./components/Footer"
import ItemDetails from "./pages/ItemDetails"

// Dialogs
import PlaceBid from "./components/dialogs/PlaceBid"
import Participate from "./components/dialogs/Participate"
import Success from "./components/dialogs/Success"

function App() {
	return (
		<>
			<Navbar />
			<Homepage />
			{/* <ItemDetails /> */}
			<hr className="border-gray-600 my-5" />
			<Footer />
		</>
	)
}

export default App
