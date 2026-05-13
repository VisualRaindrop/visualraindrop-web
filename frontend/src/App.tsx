import { BrowserRouter, Routes, Route } from "react-router"

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home"
import Projects from "./pages/Projects";

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path={'/'} element={<Home />}/>
                    <Route path={'/Projects'} element={<Projects />}/>
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}

export default App;