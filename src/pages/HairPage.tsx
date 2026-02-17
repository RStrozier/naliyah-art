import nayHair1 from "../assets/hair/Nay-Hair-1.jpg"
import nayHair2 from "../assets/hair/Nay-Hair-2.jpeg"
import nayHair3 from "../assets/hair/Nay-Hair-3.jpeg"
import nayHair4 from "../assets/hair/Nay-Hair-4.jpeg"
import nayHair5 from "../assets/hair/Nay-Hair-5.jpg"
import nayHair6 from "../assets/hair/Nay-Hair-6.jpeg"
import nayHair7 from "../assets/hair/Nay-Hair-7.jpeg"
import nayHair8 from "../assets/hair/Nay-Hair-8.jpeg"
import BackButton from "../components/buttons/BackButton"

const HairPage = () => {
  return (
    <>
      {/* <ProgressBar /> */}
      <BackButton />
      <div className="text-center text-3xl font-bold my-4 sub-color-2 playwrite-nz-basic">Hair</div>
      <div className="flex flex-wrap justify-center items-center gap-6 p-4">
        <img src={nayHair2} alt="Art" className="max-w-xs rounded-lg shadow-md" />
        <img src={nayHair3} alt="Art" className="max-w-xs rounded-lg shadow-md" />
          <img src={nayHair1} alt="Art" className="max-w-xs rounded-lg shadow-md" />
         <img src={nayHair7} alt="Art" className="max-w-xs rounded-lg shadow-md" />
        <img src={nayHair4} alt="Art" className="max-w-xs rounded-lg shadow-md" />
        <img src={nayHair8} alt="Art" className="max-w-xs rounded-lg shadow-md" />
        <img src={nayHair5} alt="Art" className="max-w-xs rounded-lg shadow-md" />
        <img src={nayHair6} alt="Art" className="max-w-xs rounded-lg shadow-md" />

      </div>
    </>
  )
}

export default HairPage