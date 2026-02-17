import { Route, BrowserRouter, Routes } from "react-router-dom"
import ArtPage from "../pages/ArtPage"
import HomePage from "../pages/HomePage"


const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
             <Route path="/" element={<HomePage />} />
            <Route path="/art" element={<ArtPage />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter