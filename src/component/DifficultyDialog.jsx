import * as React from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";
import ChildCareIcon from "@mui/icons-material/ChildCare";
function DifficultyDialog(props) {
  return (
    <Dialog onClose={props.onCloseOrNot} open={props.open}>
      <DialogTitle>{`${props.message}`}</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem disableGutters>
          <ListItemButton
            onClick={props.onClose}
            component={Link}
            to="/game/normal"
            reloadDocument={true}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <ChildCareIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="NORMAL" />
          </ListItemButton>
        </ListItem>

        <ListItem disableGutters>
          <ListItemButton
            onClick={props.onClose}
            component={Link}
            to="/game/hard"
            reloadDocument={true}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="HARD" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

export default DifficultyDialog;
