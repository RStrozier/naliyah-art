import { Link } from "react-router-dom";
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
      path: "/henna",
      title: "Henna",
      image: nayHenna1,
      description:
        "Wanting to translate art from paper to skin, Naliyah began with a Henna kit to take her art from 2D to 3D.",
    },
    {
      path: "/random",
      title: "Random",
      image: nayRandom1,
      description:
        "Whether writing poems, designing shoes, or building legos. There is no shortage of art.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-2">
      {portfolioItems.map((item, index) => (
        <Card
          key={index}
          sx={{
            width: "100%",
            maxWidth: 400,
            height: 500, // Set a fixed height for the card
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
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <div className="sub-color-2">Explore the beauty of {item.title}.</div>
                <br />
                <div className="sub-color-1 mx-2">{item.description}</div>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            sx={{
              justifyContent: "center", 
              padding: "16px", 
            }}
          >
            <Button
              component={Link}
              to={item.path}
              size="medium"
              color="primary"
              className="main-gradient"
            >
              View {item.title} Portfolio
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default PortfolioCards;