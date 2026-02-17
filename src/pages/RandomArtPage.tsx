import BackButton from "../components/buttons/BackButton";
import nayRandom1 from "../assets/random/Nay-Random-1.png";
import nayRandom2 from "../assets/random/Nay-Random-2.jpeg";
import nayRandom3 from "../assets/random/Nay-Random-3.jpg";

const RandomArtPage = () => {
  return (
    <>
      <BackButton />
      <div className="text-center text-3xl font-bold my-4 sub-color-2">Random</div>
      <div className="flex flex-wrap justify-center items-center gap-6 p-4">
        <img
          src={nayRandom2}
          alt="Art"
          className="max-w-xs rounded-lg shadow-md"
        />
        <img
          src={nayRandom3}
          alt="Art"
          className="max-w-xs rounded-lg shadow-md"
        />
        <img
          src={nayRandom1}
          alt="Art"
          className="max-w-xs rounded-lg shadow-md"
        />
      </div>
    </>
  );
};

export default RandomArtPage;