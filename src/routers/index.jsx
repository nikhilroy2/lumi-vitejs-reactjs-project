
// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout
import Base from "../layout/base/Base";

// .................Pages............................
import Homepage from "../pages/homepage/Homepage";
import Sitemap from "../pages/sitemap/Sitemap";
import Login from "../pages/Login/Login";
import Apply from "../pages/apply/Apply";
import ForgetPassword from "../pages/forget_password/ForgetPassword";
import Signup from "../pages/signup/Signup";
import About from "../pages/about/About";
// .................Pages............................End

function MyRoutes() {
    return (
        <BrowserRouter>
            <Base>
                <Routes>
                    <Route path="/" element={<Homepage></Homepage>}></Route>
                    <Route path="/hub/login" element={<Login></Login>}></Route>
                    <Route path="/hub/forgot-password" element={<ForgetPassword></ForgetPassword>}></Route>
                    <Route path="/apply/loan-qualify" element={<Apply></Apply>}></Route>
                    <Route path="/apply/signup" element={<Signup></Signup>}></Route>
                    <Route path="/sitemap" element={<Sitemap></Sitemap>}></Route>
                    <Route path="/about" element={<About></About>}></Route>
                </Routes>
            </Base>
        </BrowserRouter>
    )
}

export default MyRoutes;