import { BrowserRouter, Routes, Route } from "react-router"

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home"
import Project from "./pages/Project";
import Navigation_Behavior from "./components/Navigation_Behavior";
import Contact from "./sections/Contact";

function App() {
    return (
        <BrowserRouter>
            <Navigation_Behavior/>
            <MainLayout>
                <Routes>
                    <Route path={'/'} element={<Home />}/>
                    <Route path={'/project'} element={<Project />}/>
                    <Route path={'/contact'} element={<Contact/>}/>
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}

export default App;