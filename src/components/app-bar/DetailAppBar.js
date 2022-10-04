import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import Link from "@mui/material/Link";

export default function DetailAppBar({ componentName }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ color: "inherit" }}>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
              color="inherit"
            >
              <ArrowBackIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" noWrap component="div">
            {componentName}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
