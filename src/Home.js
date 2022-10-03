import * as React from "react";
import HomeAppBar from "./components/app-bar/HomeAppBar.js";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProTip from "./ProTip";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import component_lists from "./utils/_DATA.js";

const LinkBehavior = React.forwardRef((props, ref) => {
  console.log("link props ", props);
  console.log("REF ", ref);
  return (
    <RouterLink
      ref={ref}
      to={props.to}
      {...props}
      style={{ textDecoration: "none" }}
    />
  );
});

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      {/* <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function Home() {
  // component_lists.sort(
  //   (a, b) => component_lists[a].name - component_lists[b].name
  // );
  return (
    <>
      <HomeAppBar />
      <List
        sx={{ width: "100%", bgcolor: "background.paper", cursor: "pointer" }}
      >
        {component_lists.map((component) => (
          <Link component={LinkBehavior} to={`/components/${component.id}`}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={component.name}
                secondary={component.description}
              />
            </ListItem>
            <Divider component="li" />
          </Link>
        ))}
      </List>
      {/* <Container maxWidth="lg">
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App example
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container> */}
      {/* <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "inherit",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      ></Box> */}
    </>
  );
}
