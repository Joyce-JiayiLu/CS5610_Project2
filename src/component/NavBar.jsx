import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import PatternIcon from "@mui/icons-material/Pattern";

export default function NavBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link}
            to="/"
          >
            <PatternIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Wordle {props.difficulty}
          </Typography>
          <Button color="inherit" component={Link} to="/">
            About
          </Button>
          <Button color="inherit" component={Link} to="/rule">
            Rule
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
