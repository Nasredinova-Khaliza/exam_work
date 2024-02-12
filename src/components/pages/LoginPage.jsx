import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import scss from "./LoginPage.module.scss";

const url =
	"https://api.elchocrud.pro/api/v1/9a50ea85d6d9303d3551a2638025cd92/userPage";

const LoginPage = () => {
	const navigate = useNavigate();
	const [userName, setUserName] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const handleAuth = () => {
		if (userName === "" || userPassword === "") {
			alert("write");
		} else {
			const dataList = {
				name: userName,
				password: userPassword,
			};
			getUser(dataList);
		}
	};

	const getUser = async (dataList) => {
		try {
			const response = await axios.get(url);
			const responseData = response.data;

			const findUser = responseData.find(
				(item) =>
					item.login === dataList.login && item.password === dataList.password
			);

			if (findUser) {
				localStorage.setItem("isAuth", "" + findUser._id);
				navigate("/user");
			} else {
				alert("Пользователь не найден");
			}
		} catch (error) {
			console.log("Ошибка при аутентификации:", error);
		}
	};

	const handleNavigate = () => {
		navigate("/registration");
	};

	return (
		<div className={scss.LoginPage}>
			<div className="container">
				<div className={scss.card}>
					<h1>Login</h1>
					<input
						type="text"
						value={userName}
						placeholder="Email"
						onChange={(e) => setUserName(e.target.value)}
					/>
					<input
						type="password"
						value={userPassword}
						placeholder="Password"
						onChange={(e) => setUserPassword(e.target.value)}
					/>
					<button onClick={handleAuth}>Login</button>
					<button onClick={handleNavigate}>Registration</button>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
