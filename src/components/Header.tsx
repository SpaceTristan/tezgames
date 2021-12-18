import { AppBar, Toolbar, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Connect } from "./Connect";

const style = makeStyles({
  titleItemRight: {
    color: "white",
    //   backgroundColor: "blue",
    top: "70%",
    height: 50,
    float: "right",
    position: "relative",
  },
});

export const Header = () => {
  const classes = style();
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Box display="flex" flexGrow={1}></Box>
        <div className={classes.titleItemRight}>
          <Connect />
        </div>
      </Toolbar>
    </AppBar>
  );
};
