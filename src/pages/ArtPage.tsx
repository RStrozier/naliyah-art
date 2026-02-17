import nayArt1 from "../assets/art/Nay-Art-1.jpeg";
import nayArt2 from "../assets/art/Nay-Art-2.png";
import nayArt3 from "../assets/art/Nay-Art-3.png";
import nayArt4 from "../assets/art/Nay-Art-4.png";
import nayArt5 from "../assets/art/Nay-Art-5.png";
import nayArt6 from "../assets/art/Nay-Art-6.png";
import nayArt7 from "../assets/art/Nay-Art-7.png";
import nayArt8 from "../assets/art/Nay-Art-8.png";
import nayArt9 from "../assets/art/Nay-Art-9.png";
import nayArt10 from "../assets/art/Nay-Art-10.png";
import nayArt11 from "../assets/art/Nay-Art-11.jpg";
import BackButton from "../components/buttons/BackButton";
// import ProgressBar from "../components/ProgressBar";

const ArtPage = () => {
  return (
    <>
      {/* <ProgressBar /> */}
      <BackButton />
      <div className="text-center text-3xl font-bold my-4 sub-color-2">Art</div>
      <div className="flex flex-wrap justify-center items-center gap-6 p-4">
        <img src={nayArt1} alt="Art" className="max-w-xs rounded-lg shadow-md" />
        <img src={nayArt5} alt="Art" className="max-w-xs rounded-lg shadow-md" />
        <img src={nayArt3} alt="Art" className="max-w-xs rounded-lg shadow-md" />
         <img src={nayArt9} alt="Art" className="max-w-xs rounded-lg shadow-md" />
        <img src={nayArt6} alt="Art" className="max-w-xs rounded-lg shadow-md" />
         <img src={nayArt11} alt="Art" className="max-w-xs rounded-lg shadow-md" />
        <img src={nayArt4} alt="Art" className="max-w-xs rounded-lg shadow-md" />
        <img src={nayArt2} alt="Art" className="max-w-xs rounded-lg shadow-md" />
         <img src={nayArt10} alt="Art" className="max-w-xs rounded-lg shadow-md" />
         <img src={nayArt7} alt="Art" className="max-w-xs rounded-lg shadow-md" />
          <img src={nayArt8} alt="Art" className="max-w-xs rounded-lg shadow-md" />

      </div>
    </>
  );
};

export default ArtPage;