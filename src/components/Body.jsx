import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux"; 
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

export const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user)
  const fetchUser = async () => {
    try {
      const res = await axios.get(
        BASE_URL + "/profile/view",
        {withCredentials: true}
      )
      dispatch(addUser(res.data));
    } catch (error) {
      if(error.status === 401){
        navigate("/login");
      }
    }
  }

  useEffect(() => {
    if(!userData){
      fetchUser();
    }
  },[userData])
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavBar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
