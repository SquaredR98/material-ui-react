import {
  AppBar,
  Button,
  Slide,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/styles";

import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  tabContainer: {
    marginLeft: "auto",
    height: "100%",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    color: 'black'
  },
  button: {
    ...theme.palette.backgroundEstimate,
    ...theme.typography.estimateButton,
    color: "white",
    borderRadius: "50px",
    margin: "0 25px",
    padding: ".4rem 2rem",
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

  const [currentNavItem, setCurrentNavItem] = useState(0);

  const handleChange = (e, value) => {
    setCurrentNavItem(value);
  };

  useEffect(() => {
    if(window.location.pathname === "/" && currentNavItem !== 0) {
      setCurrentNavItem(0)
    } else if (window.location.pathname === "/services" && currentNavItem !== 1) {
      setCurrentNavItem(1)
    } else if (window.location.pathname === "/revolution" && currentNavItem !== 2) {
      setCurrentNavItem(2)
    } else if (window.location.pathname === "/about-us" && currentNavItem !== 3) {
      setCurrentNavItem(3)
    } else if (window.location.pathname === "/contact-us" && currentNavItem !== 4) {
      setCurrentNavItem(4)
    } else if (window.location.pathname === "/free-estimate" && currentNavItem !== 5) {
      setCurrentNavItem(5)
    } 
  }, [currentNavItem])

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar elevation={0}>
          <Toolbar>
            <Logo setValue={setCurrentNavItem} />
            <Tabs
              value={currentNavItem}
              className={classes.tabContainer}
              onChange={handleChange}
              indicatorColor="primary"
            >
              <Tab component={Link} to="/" className={classes.tab} label="Home" />
              <Tab component={Link} to="/services" className={classes.tab} label="Services" />
              <Tab component={Link} to="/revolution" className={classes.tab} label="Revolution" />
              <Tab component={Link} to="/about-us" className={classes.tab} label="About Us" />
              <Tab component={Link} to="/contact-us" className={classes.tab} label="Contact Us" />
            </Tabs>
            <Button variant="contained" component={Link} to="free-estimate" className={classes.button}>
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
