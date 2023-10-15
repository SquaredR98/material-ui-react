import { AppBar, Slide, Toolbar, useScrollTrigger } from "@material-ui/core";
import React from "react";
import Logo from "./Logo";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function () {
  const classes = useStyles();
  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar elevation={0}>
          <Toolbar>
            <Logo />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
