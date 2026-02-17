import { HiOutlineBackward } from "react-icons/hi2";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link
      to="/" // Correct path here
      className="flex items-center sub-color-1 hover:underline"
      aria-label="Back to Home"
    >
      <HiOutlineBackward className="mr-2" size={20} /> 
      Back to Home
    </Link>
  );
};

export default BackButton;