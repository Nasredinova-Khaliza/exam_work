import scss from "./Header.module.scss";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const links = [
		// {
		// 	name: "Home",
		// 	href: "/",
		// },
		{
			name: "Login",
			href: "/login",
		},
		{
			name: "Registration",
			href: "/registration",
		},
		// {
		// 	name: "UserHome",
		// 	href: "/userHome",
		// },
	];

	const url =
		"https://api.elchocrud.pro/api/v1/9a50ea85d6d9303d3551a2638025cd92/userPage";

	const getRequest = async () => {
		try {
			const response = await axios.get(url);
			const responseData = response.data;
			console.log(responseData);
		} catch {
			console.log("error");
		}
	};

	useEffect(() => {
		getRequest();
	}, []);
	return (
		<header className={scss.Header}>
			<div className={scss.content}>
				<nav>
					<ul>
						{links.map((item, index) => (
							<li key={index}>
								<Link to={item.href}>{item.name}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
