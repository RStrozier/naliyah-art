import '../App.css'
import PortfolioCards from '../components/PortfolioCards'
import Hero from '../components/Hero'
import About from '../components/About'
import textImage from "../assets/self/home-text.png"

function HomePage() {

  return (
    <>
      <Hero />
      <br />
      <About />
      <div className="p-5">
        <img src={textImage} className="max-w-full sm:max-w-lg mx-auto" 
        alt="Check Out Naliyah's Creative Portfolio" />
      </div>
      <PortfolioCards />
      <br />
      <br />
      <br />
      <div className="my-2 sub-color-2 text-xs">Designed by ReGenesis Digital. All rights reserved.</div>
    </>
  )
}

export default HomePage
