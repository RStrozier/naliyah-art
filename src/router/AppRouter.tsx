import { Route, BrowserRouter, Routes } from "react-router-dom"
import ArtPage from "../pages/ArtPage"
import HomePage from "../pages/HomePage"
import HairPage from "../pages/HairPage"
import HennaPage from "../pages/HennaPage"
import RandomArtPage from "../pages/RandomArtPage"


const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/art" element={<ArtPage />} />
                    <Route path="/hair" element={<HairPage />} />
                    <Route path="/henna" element={<HennaPage />} />
                     <Route path="/random" element={<RandomArtPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter