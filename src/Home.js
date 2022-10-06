import * as React from "react";
import HomeAppBar from "./components/app-bar/HomeAppBar.js";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import componentListData from "./utils/_DATA.js";

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

export default function Home() {
  const [componentLists, setComponentLists] = React.useState(componentListData);

  return (
    <>
      <HomeAppBar
        componentLists={componentLists}
        setComponentLists={setComponentLists}
      />
      <List
        sx={{ width: "100%", bgcolor: "background.paper", cursor: "pointer" }}
      >
        {componentLists.map((component) => (
          <Link component={LinkBehavior} to={`/components/${component.name}`}>
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
    </>
  );
}
