import * as React from "react";
import HomeAppBar from "./components/app-bar/HomeAppBar.js";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import componentListData from "./utils/_DATA.js";
import StarIcon from "@mui/icons-material/Star";

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
  const handleToggle = (componentId) => {
    // console.log(componentLists[componentId]);
    // setComponentLists((prevState) => {
    //   return [...componentLists, componentLists[componentId]:{

    //   } ];
    // });
    setComponentLists(
      // componentLists[componentId]
      [...componentLists].map((object) => {
        if (object.id === componentId) {
          return {
            ...object,
            favorite: !object.favorite,
          };
        } else return object;
      })
    );
  };

  // const toggleColor = (favoriteFlag) => {
  //   const favoriteColor = favoriteFlag ? "#ffa416" : "inherit";
  //   return { color: `${favoriteColor}` };
  // };
  return (
    <>
      <HomeAppBar
        componentLists={componentLists}
        setComponentLists={setComponentLists}
      />
      <List
        sx={{ width: "100%", bgcolor: "background.paper", cursor: "pointer" }}
      >
        {componentLists.map((component, index) => (
          <>
            <ListItem
              key={component.id}
              alignItems="flex-start"
              secondaryAction={
                <StarIcon
                  edge="end"
                  onClick={() => handleToggle(component.id)}
                  // style={toggleColor(component.favorite)}
                  style={{ color: component.favorite ? "#ffa416" : "inherit" }}
                />
              }
            >
              <Link
                component={LinkBehavior}
                to={`/components/${component.name}`}
              >
                <ListItemText
                  primary={component.name}
                  secondary={component.description}
                />
              </Link>
            </ListItem>
            <Divider component="li" />
          </>
        ))}
      </List>
    </>
  );
}
