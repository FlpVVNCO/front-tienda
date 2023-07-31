import { Box, ListItem, List, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ background: "#270263", color: "white", px: 20 }}>
      <Box>
        <List>
          <ListItem>
            <Typography>Contactanos</Typography>
          </ListItem>
          <ListItem>
            <Typography>Contactanos</Typography>
          </ListItem>
          <ListItem>
            <Typography>Contactanos</Typography>
          </ListItem>
          <ListItem>
            <Typography>Contactanos</Typography>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Footer;
