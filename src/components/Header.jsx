import {
  AppBar,
  Button,
  Slide,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
  Menu,
  MenuItem,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    color: "black",
  },
  button: {
    ...theme.palette.backgroundEstimate,
    ...theme.typography.estimateButton,
    color: "white",
    borderRadius: "50px",
    margin: "0 25px",
    padding: ".4rem 2rem",
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setCurrentNavItem(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handlemenuItemClick = (e, idx) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(idx);
  };

  const menuOptions = [
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Custom Software Development",
      link: "/custom-software",
    },
    {
      name: "Mobile App Development",
      link: "/mobile-apps",
    },
    {
      name: "Website Development",
      link: "/websites",
    },
  ];

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (currentNavItem !== 0) setCurrentNavItem(0);
        break;
      case "/services":
        if (currentNavItem !== 1) setCurrentNavItem(1) && setSelectedIndex(0);
        break;
      case "/custom-software":
        if (currentNavItem !== 1) setCurrentNavItem(1) && setSelectedIndex(1);
        break;
      case "/mobile-apps":
        if (currentNavItem !== 1) setCurrentNavItem(1) && setSelectedIndex(2);
        break;
      case "/websites":
        if (currentNavItem !== 1) setCurrentNavItem(1) && setSelectedIndex(3);
        break;
      case "/revolution":
        if (currentNavItem !== 2) setCurrentNavItem(2);
        break;
      case "/about":
        if (currentNavItem !== 3) setCurrentNavItem(3);
        break;
      case "/contact":
        if (currentNavItem !== 4) setCurrentNavItem(4);
        break;
      case "/free-estimate":
        if (currentNavItem !== 5) setCurrentNavItem(5);
        break;
      default:
        break;
    }
  }, [currentNavItem]);

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
              <Tab
                component={Link}
                to="/"
                className={classes.tab}
                label="Home"
              />
              <Tab
                component={Link}
                to="/services"
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? true : undefined}
                className={classes.tab}
                onMouseOver={(e) => handleClick(e)}
                label="Services"
              />
              <Tab
                component={Link}
                to="/revolution"
                className={classes.tab}
                label="Revolution"
              />
              <Tab
                component={Link}
                to="/about-us"
                className={classes.tab}
                label="About Us"
              />
              <Tab
                component={Link}
                to="/contact-us"
                className={classes.tab}
                label="Contact Us"
              />
            </Tabs>
            <Button
              variant="contained"
              component={Link}
              to="free-estimate"
              className={classes.button}
            >
              Free Estimate
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => {
                handleClose();
                setCurrentNavItem(1);
              }}
              MenuListProps={{ onMouseLeave: handleClose }}
              classes={{ paper: classes.menu }}
              elevation={0}
            >
              {menuOptions.map((el, idx) => (
                <MenuItem
                  key={idx}
                  onClick={(event) => {
                    handleClose();
                    setCurrentNavItem(1);
                    handlemenuItemClick(event, idx);
                  }}
                  component={Link}
                  to={el.link}
                  classes={{ root: classes.menuItem }}
                  selected={idx === selectedIndex && currentNavItem === 1}
                >
                  {el.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
