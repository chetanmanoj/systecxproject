import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./components";
import {  Login, Dashboard, Transactions, Forgotpass } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/transactions" element={<Transactions/>}/>
          <Route path="/forgotpass" element={<Forgotpass/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
