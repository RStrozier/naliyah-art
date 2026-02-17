import heroImage from "../assets/self/hero-text-3.png";

const Hero = () => {
  return (
    <div
      className="relative flex items-center justify-center h-[50vh] bg-cover bg-center rounded-lg overflow-hidden mt-1"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
    </div>
  );
};

export default Hero;