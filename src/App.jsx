import Navbar from "./components/Navbar"
import "./App.css"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
			<hr className="border-gray-600 my-5" />
			<Footer />
		</>
	)
}

export default App
