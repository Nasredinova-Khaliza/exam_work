import axios from "axios";
import { useEffect, useState } from "react";
import scss from "./UserHome.module.scss";

const url =
	"https://api.elchocrud.pro/api/v1/9a50ea85d6d9303d3551a2638025cd92/userPage";

const UserHome = () => {
	const [userProfile, setUserProfile] = useState([]);

	const getUserProfile = async () => {
		try {
			const response = await axios.get(url);
			const responseData = response.data;
			setUserProfile(responseData);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUserProfile();
	}, []);

	return (
		<div className={scss.UserHome}>
			<div className={scss.content}>
				{Object.keys(userProfile).length > 0 && (
					<div>
						<h1>{userProfile.login}</h1>
						<p>{userProfile.password}</p>
						<img src={userProfile.image} alt="name" />
					</div>
				)}
			</div>
		</div>
	);
};

export default UserHome;
