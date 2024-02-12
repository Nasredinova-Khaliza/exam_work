import { Routes } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import UserHomePage from "../pages/UserHomePage";

const Layout = () => {
	return (
		<div>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/registration" element={<RegistrationPage />} />
					<Route path="/userHome" element={<UserHomePage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
