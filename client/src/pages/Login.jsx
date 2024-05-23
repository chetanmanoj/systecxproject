import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Checkbox, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import logo from "../assets/logotitle.svg";
import loginpic from "../assets/login.svg";

const Login = () => {
  const loginForm = {
    email: "",
    password: "",
  };
  const [loginData, setloginData] = useState(loginForm);
  const [showPassword, setShowpassword] = useState(false);
  const handleClickShowPassword = () => setShowpassword(!showPassword);
  const navigate = useNavigate();

  const userLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8000/api/user/login", {
      email: loginData.email,
      password: loginData.password,
    });
    // console.log(response.data);
    if (response.data.success) {
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } else {
      alert("Email or password incorrect!");
    }
    // console.log("LoginData", LoginData);
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
      <div className="h-[7rem] px-36 flex items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-1 items-center justify-center">
          {/* <img src="https://i.ibb.co/8DYn3kP/loginpic.png" alt="login pic" /> */}
          <img src={loginpic} alt="login pic" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <form
            className="flex flex-col items-center justify-center bg-white rounded-xl w-[27.5rem] h-[25.9rem] px-16 gap-4"
            onSubmit={userLogin}
          >
            <div className="flex flex-col w-full">
              <span className="text-[#004D71] text-[16px]">Welcome to TMS</span>
              <span className="text-[#232323] text-[22px]">
                Trading & Analytics Platform
              </span>
            </div>
            <div>
              <TextField
                name="email"
                onChange={(e) => handleChange(e)}
                type="email"
                className=" rounded-2xl border-[1px] bg-[#F8FAFB] border-[#AFAFAF] w-[19.8rem] h-[4.43rem] px-[1.25rem] "
                label="User ID / Email"
                sx={{
                  ".MuiOutlinedInput-root": {
                    borderRadius: 5,
                  },
                }}
              />
              <TextField
                name="password"
                type={showPassword ? "text" : "password"} 
                className="rounded-xl border-[1px] bg-[#F8FAFB] border-[#AFAFAF] w-[19.8rem] h-[4.43rem] px-[1.25rem] "
                onChange={(e) => handleChange(e)}
                label="Password"
                sx={{
                  ".MuiOutlinedInput-root": {
                    borderRadius: 5,
                  },
                }}
                InputProps={{ // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <div className="flex flex-row items-center justify-between">
                <div className="">
                  <Checkbox />
                  <span className="text-[#2C2C2E] text-[12px]">
                    Remember me
                  </span>
                </div>
                <Link to="/forgotpass">
                  <span className="text-[#4D47C3] text-[12px] flex self-end">
                    Forgot your password?
                  </span>
                </Link>
              </div>
            </div>

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
