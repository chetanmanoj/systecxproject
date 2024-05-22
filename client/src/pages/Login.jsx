import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField } from "@mui/material";
import logo from "../assets/logotitle.svg";
import loginpic from "../assets/login.svg";

const Login = () => {
    const loginForm = {
        email: "",
        password: "",
      };
  const [loginData, setloginData] = useState(loginForm);
  const navigate = useNavigate();

  

  const userLogin = async (e) => {
    e.preventDefault();
    dispatch(loginUser)
    const response = await axios.post(
      "http://localhost:8000/api/user/login",
      {
        email: loginData.email,
        password: loginData.password,
      }
    );
    // console.log(response.data);
    if (response.data.success) {
      localStorage.setItem("token", response.data.token);
          navigate("/dashboard");
    } else {
      alert("Email or password incorrect!");
    }
    console.log("LoginData", LoginData);
    setLoginData(loginForm);
  };


  const handleChange = (e) => {
    setloginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="bg-login bg-cover h-screen w-screen">
      {/* Header */}
      <div className="h-[6rem] px-36 flex items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-1 items-center justify-center">
          <img src={loginpic} alt="login pic" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <form className="flex flex-col items-center justify-center bg-white rounded-xl w-[27.5rem] h-[25.9rem]"
            onSubmit={userLogin}
          >
            <span>Welcome to TMS</span>
            <span>Trading & Analytics Platform</span>
            <TextField
              // value={customerLoginData.email}
              name="email"
              onChange={(e) => handleChange(e)}
              type="email"
              className=" rounded-2xl border-[1px] bg-[#F8FAFB] border-[#AFAFAF] w-[19.8rem] h-[4.43rem] px-[1.25rem] "
              label="User ID / Email"
            />
            <TextField
              // value={customerLoginData.password}

              type="password"
              name="password"
              className="rounded-xl border-[1px] bg-[#F8FAFB] border-[#AFAFAF] w-[19.8rem] h-[4.43rem] px-[1.25rem] "
              onChange={(e) => handleChange(e)}
              label="Password"
            />
            <Link to="/forgotpass">
              <span>Forgot your password?</span>
            </Link>
            <button
              type="submit"
              className="h-[2.8rem] w-[20.06rem] bg-[#2C67FF] font-medium text-white text-[16px] rounded-xl"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      {/* Footer */}
      <div className="px-36">
        <span className="font-normal">Powered by</span>{" "}
        <span className=" font-semibold">STX Platform</span>
      </div>
    </div>
  );
};

export default Login;
