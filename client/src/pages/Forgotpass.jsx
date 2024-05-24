import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
import logo from "../assets/logotitle.svg";
import loginpic from "../assets/login.svg";
import chatbubble from "../assets/chatbubble.svg";

const Forgotpass = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);

  const openMessage = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email");
    } else {
      setMessage(true);
    }
  };
  const closeMessage = () => {
    setMessage(false);
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
    setMessage(false);
  };
  return (
    <div className="bg-login bg-cover h-screen w-screen">
      {/* Header */}
      {message && (
        <div className="bg-white absolute w-full flex flex-row h-[34px] justify-between items-center px-[3.48rem]">
          <span></span>
          <div className="flex flex-row gap-3">
            <img src={chatbubble} alt="chat" />
            <span className="text-[#6C6C6C] text-[12px] font-poppins">
              A link to reset your password has been sent to
              <span className="text-black font-medium"> {email}</span>
            </span>
          </div>
          <button onClick={closeMessage}>
            <CloseIcon />
          </button>
        </div>
      )}
      <div className="h-[7rem] px-36 flex items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-1 items-center justify-center">
          {/* <img src="https://i.ibb.co/8DYn3kP/loginpic.png" alt="login pic" /> */}
          <img src={loginpic} alt="login pic" />
        </div>
        <div className="flex flex-1 items-center justify-center font-poppins">
          {/* FORM  */}
          <form
            onSubmit={openMessage}
            className="flex flex-col items-center justify-center bg-white rounded-xl w-[27.5rem] h-[25.9rem] px-14 gap-4"
          >
            <div className="flex flex-col w-full gap-2">
              <span className="text-[#232323] text-[22px]">
                Forgot Password ?
              </span>
              <span className="text-[#2C2C2E] text-[12px]">
                Enter the email address associated with your account, and we’ll
                email you a link to reset your password.
              </span>
            </div>
            
              <TextField
                name="email"
                onChange={(e) => handleChange(e)}
                type="email"
                className=" rounded-2xl border-[1px] bg-[#F8FAFB] border-[#AFAFAF] w-[19.8rem] h-[4.43rem] px-[1.25rem] "
                label="User ID / Email"
                sx={{
                  ".MuiOutlinedInput-root": {
                    borderRadius: 5 
                  }
                }}
              />
              <button
                // onClick={openMessage}
                type="submit"
                className="h-[2.8rem] w-[20.06rem] bg-[#2C67FF] font-medium text-white text-[16px] rounded-xl"
              >
                Send reset link
              </button>
              <div className="flex flex-col items-center justify-between">
                <div className="">
                  <span className="text-[#4F5466] text-[12px]">
                    I remembered my password. let's go
                  </span>
                </div>
                <Link to="/login">
                  <span className="text-[#4D47C3] text-[12px] flex self-end items-center gap-2">
                    <KeyboardBackspaceSharpIcon/>
                    Back to login
                  </span>
                </Link>
              
            </div>
          </form>
        </div>
      </div>
      {/* Footer */}
      <div className="px-36 font-gilroy">
        <span className="font-normal">Powered by</span>{" "}
        <span className=" font-semibold">STX Platform</span>
      </div>
    </div>
  );
};

export default Forgotpass;
