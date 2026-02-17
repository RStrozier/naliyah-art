import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import nayArt1 from "../assets/art/Nay-Art-1.jpeg";
import nayHair1 from "../assets/hair/Nay-Hair-1.jpg"
import nayHenna1 from "../assets/henna/Nay-Henna-1.jpg"
import nayRandom1 from "../assets/random/Nay-Random-1.png"

const PortfolioCards = () => {
  const portfolioItems = [
    { path: "/art", title: "Art", image: nayArt1 }, 
    { path: "/hair", title: "Hair Art", image: nayHair1 },
    { path: "/henna", title: "Henna", image: nayHenna1 },
    { path: "/random", title: "Random", image: nayRandom1 },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 my-3">
      {portfolioItems.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardActionArea component={Link} to={item.path}>
            <CardMedia
              component="img"
              height="140"
              image={item.image} // Correctly uses the `image` property
              alt={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore the beauty of {item.title}. Click to learn more!
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button component={Link} to={item.path} size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default PortfolioCards;