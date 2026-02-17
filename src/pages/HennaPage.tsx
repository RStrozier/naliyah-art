import BackButton from "../components/buttons/BackButton"
import nayHenna1 from "../assets/henna/Nay-Henna-1.jpg"

const HennaPage = () => {
  return (
       <>
      {/* <ProgressBar /> */}
      <BackButton />
      <div className="text-center text-3xl font-bold my-4 sub-color-2 playwrite-nz-basic">Henna</div>
      <div className="flex flex-wrap justify-center items-center gap-6 p-4">
        {/* {/* <img src={nayRandom1} alt="Art" className="max-w-xs rounded-lg shadow-md" /> */}
        <img src={nayHenna1} alt="Art" className="max-w-xs rounded-lg shadow-md" /> 
      </div>
    </>
  )
}

export default HennaPage