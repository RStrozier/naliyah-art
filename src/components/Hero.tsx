import heroImage from "../assets/self/Hero-Image.png";

const Hero = () => {
  return (
    <div
      className="relative flex items-center justify-center h-[50vh] bg-cover bg-center rounded-lg overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Title */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold sub-color-3">
          Naliyah's Art
        </h1>
      </div>
    </div>
  );
};

export default Hero;