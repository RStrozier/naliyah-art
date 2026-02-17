import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import nayArt1 from "../assets/art/Nay-Art-1.jpeg";
import nayHair1 from "../assets/hair/Nay-Hair-1.jpg";
import nayHenna1 from "../assets/henna/Nay-Henna-1.jpg";
import nayRandom1 from "../assets/random/Nay-Random-1.png";

const PortfolioCards = () => {
  const portfolioItems = [
    {
      path: "/art",
      title: "Art",
      image: nayArt1,
      description:
        "Naliyah's favorite hobby and passion for life. She loves to draw and create anime images.",
    },
    {
      path: "/hair",
      title: "Hair Art",
      image: nayHair1,
      description:
        "As a self-taught hair artist, Naliyah went from styling herself, to creatively styling her family and friends.",
    },
    {
      path: "/random",
      title: "Random",
      image: nayRandom1,
      description:
        "Whether writing poems, designing shoes, or building legos. There is no shortage of art.",
    },
    {
      path: "/henna",
      title: "Henna",
      image: nayHenna1,
      description:
        "Wanting to translate art from paper to skin, Naliyah began with a Henna kit to take her art from 2D to 3D.",
    },
  ];

  return (
    <div
      className="sub-gradient-2 p-8"
      style={{
        background: "linear-gradient(195deg, rgba(252, 229, 230, 1) 70%, rgba(255, 252, 246, 1) 0%)",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-2">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05, // Slightly scale up the card
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add shadow on hover
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: 400,
                height: 560, // Set a fixed height for the card
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: 3,
              }}
            >
              <CardActionArea component={Link} to={item.path} sx={{ flexGrow: 1 }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  sx={{
                    height: 250, // Set a fixed height for the image
                    objectFit: "cover", // Crop the image to fit the area
                  }}
                  alt={item.title}
                />
                <CardContent
                  sx={{
                    flexGrow: 1, // Allows the content to grow and fill available space
                    overflow: "hidden", // Prevents content overflow
                  }}
                >
                  <Typography gutterBottom variant="h4" component="div">
                    <div className="montserrat-normal sub-color-1">{item.title}</div>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div className="sub-color-2">
                      Explore the beauty of {item.title}.
                    </div>
                    <br />
                    <div className="sub-color-1 mx-2 montserrat-write">
                      {item.description}
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                sx={{
                  justifyContent: "center",
                  padding: "16px",
                }}
              >
                {/* Button with Framer Motion hover effect */}
                <motion.div
                  whileHover={{
                    scale: 1.1, // Slightly enlarge the button
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)", // Add shadow
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  style={{ borderRadius: "8px", overflow: "hidden" }} // Ensure smooth border radius
                >
                  <Button
                    component={Link}
                    to={item.path}
                    size="large"
                    className="main-gradient" // Restored your gradient class
                    style={{
                      padding: "12px 24px",
                      fontSize: "16px",
                      fontWeight: "semibold",
                      borderRadius: "8px",
                    }}
                  >
                    <div className="font-semibold sub-color-1">
                      View {item.title} Portfolio
                    </div>
                  </Button>
                </motion.div>
              </CardActions>
            </Card>
          </motion.div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};

export default PortfolioCards;