import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";

function Main(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        {/* <Route index element={<Home />}/> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Main;