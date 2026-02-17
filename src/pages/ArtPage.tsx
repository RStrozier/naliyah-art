import nayArt1 from "../assets/art/Nay-Art-1.jpeg";
import BackButton from "../components/buttons/BackButton";
// import ProgressBar from "../components/ProgressBar";

const ArtPage = () => {
  return (
    <>
    {/* <ProgressBar /> */}
    <BackButton />
      <div>ArtPage</div>
      <img src={nayArt1} alt="Art" />
    </>
  );
};

export default ArtPage;