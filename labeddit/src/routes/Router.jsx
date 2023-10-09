import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage, SignupPage, FeedPage, NotFoundPage } from "../pages";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/signup" element={<SignupPage/>} />
                <Route path="/feed" element={<FeedPage/>} />
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router