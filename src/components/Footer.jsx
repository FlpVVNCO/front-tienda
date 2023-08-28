import {
  Box,
  ListItem,
  List,
  Typography,
  Grid,
  Link,
  Container,
} from "@mui/material";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "#270263",
        color: "white",
        px: { xs: 10, xl: 20 },
      }}>
      {/* <Container maxWidth="xl"> */}
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            accusantium ea temporibus! Minima beatae vel accusamus tempore
            asperiores aspernatur id placeat, impedit non cum molestiae totam
            ipsum ad quam cupiditate?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">123 Main Street, Anytown, USA</Typography>
          <Typography variant="body2">Email: info@example.com</Typography>
          <Typography variant="body2">Phone: +1 234 567 8901</Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Link href="https://www.facebook.com/" color="inherit">
            <BsFacebook />
          </Link>
          <Link
            href="https://www.instagram.com/"
            color="inherit"
            sx={{ pl: 1, pr: 1 }}>
            <BsInstagram />
          </Link>
          <Link href="https://www.twitter.com/" color="inherit">
            <BsTwitter />
          </Link>
        </Grid>
      </Grid>
      <Box mt={3}>
        <Typography variant="body2" align="center" py={2}>
          {"Copyright © "}
          <Link color="inherit" href="https://your-website.com/">
            Flp Website
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
      {/* </Container> */}
    </Box>
  );
};

export default Footer;
