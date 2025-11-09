import { Route, Routes } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";
import Notfound from "../Pages/Notfound";
import { Lead } from "../Pages/Lead";

export const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/leads" element={<Lead/>} />
                <Route path="*" element={<Notfound />} />
            </Routes>

        </div>
    )
}
