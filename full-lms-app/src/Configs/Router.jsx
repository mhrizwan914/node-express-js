import { BrowserRouter, Route, Routes } from "react-router-dom";
import Students from "../Screens/Students/Students";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/students" element={<Students />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;