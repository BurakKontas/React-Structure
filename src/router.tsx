import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Homepage } from "@Pages/homepage";
// import Homepage from "@Pages/homepage/Homepage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;