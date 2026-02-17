import { motion } from "framer-motion"; // Import Framer Motion
import { FaRegGrinHearts } from "react-icons/fa";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ y: "-100vh", opacity: 0 }} // Start offscreen above the viewport
        animate={{ y: 0, opacity: 1 }} // Slide down and fade in
        transition={{
          duration: 0.8, // Animation duration
          ease: "easeInOut", // Smooth transition
        }}
        className="main-container mt-4 p-3"
      >
        <div className="sub-color-1 sm:mx-4 md:mx-6 p-2 py-4 montserrat-write">
          <FaRegGrinHearts
            size={26}
            className="mb-2"
            color="darkblue"
          />
          Hi! Welcome to my digital art portfolio. My name is Naliyah and I am
          very passionate about art. Instead of sticking with one form of art, I
          express myself through canvas, paper, hair, fashion, jewelry, and
          social media. Look around the page and explore my art!
        </div>
      </motion.div>
    </>
  );
};

export default About;