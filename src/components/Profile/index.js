import { useEffect } from "react";
import "./index.css";

const Profile = () => {
  const getProfileData = async () => {
    const token = localStorage.getItem("pa_token", "");
    const url = "https://api.spotify.com/v1/me";
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const responseStatus = await fetch(url, options);
    const responseData = await responseStatus.json();
    console.log(responseData);
  };
  useEffect(() => {
    getProfileData();
  });
  return <h1>Hello</h1>;
};

export default Profile;
