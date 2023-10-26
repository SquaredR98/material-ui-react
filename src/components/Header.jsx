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
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItemText,
  ListItem,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";

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
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "32px",
    width: "32px",
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  drawerItem: {
    ...theme.typography.tab,
    opacity: 0.7,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  drawerItemEstimate: {
    ...theme.palette.backgroundEstimate,
    color: "white",
  },
  drawerHeader: {
    fontSize: "1.5rem",
    fontWeight: "bold",
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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [currentNavItem, setCurrentNavItem] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setCurrentNavItem(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handlemenuItemClick = (e, idx) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(idx);
  };

  const menuOptions = [
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "Custom Software Development",
      link: "/custom-software",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Mobile App Development",
      link: "/mobile-apps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes = [
    {
      name: "Home",
      link: "/",
      activeIndex: 0,
    },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaHaspopup: anchorEl ? true : undefined,
      onMouseOver: (e) => handleClick(e),
    },
    {
      name: "Revolution",
      link: "/revolution",
      activeIndex: 2,
    },
    {
      name: "About Us",
      link: "/about",
      activeIndex: 3,
    },
    {
      name: "Contact Us",
      link: "/contact",
      activeIndex: 4,
    },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (currentNavItem !== route.activeIndex) {
            setCurrentNavItem(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [currentNavItem, menuOptions, selectedIndex, routes]);

  const tab = (
    <React.Fragment>
      <Tabs
        value={currentNavItem}
        className={classes.tabContainer}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {routes.map((el, indx) => (
          <Tab
            key={indx}
            component={Link}
            to={el.link}
            aria-owns={el.ariaOwns}
            aria-haspopup={el.ariaHaspopup}
            onMouseOver={el.onMouseOver}
            className={classes.tab}
            label={el.name}
          />
        ))}
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
        open={openMenu}
        onClose={() => {
          handleClose();
          setCurrentNavItem(1);
        }}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        keepMounted
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
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        disableBackdropTransition={true}
        disableDiscovery={false}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List>
          <ListItem divider>
            <ListItemText className={classes.drawerHeader} disableTypography>
              Navigation
            </ListItemText>
          </ListItem>
          {routes.map((el, indx) => (
            <ListItem
              key={indx}
              divider
              onClick={() => {
                setOpenDrawer(false);
                setCurrentNavItem(el.activeIndex);
              }}
              component={Link}
              to={el.link}
              selected={currentNavItem === el.activeIndex}
            >
              <ListItemText
                className={
                  currentNavItem === el.activeIndex
                    ? classes.drawerItem + " " + classes.drawerItemSelected
                    : classes.drawerItem
                }
                disableTypography
              >
                {el.name}
              </ListItemText>
            </ListItem>
          ))}

          <ListItem
            button
            divider
            onClick={() => {
              setOpenDrawer(false);
              setCurrentNavItem(5);
            }}
            component={Link}
            selected={currentNavItem === 5}
            className={classes.drawerItemEstimate}
            to="/free-estimate"
          >
            <ListItemText
              className={
                currentNavItem === 5
                  ? classes.drawerItem + " " + classes.drawerItemSelected
                  : classes.drawerItem
              }
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar elevation={0}>
          <Toolbar disableGutters={matches}>
            <Logo setValue={setCurrentNavItem} />
            {matches ? drawer : tab}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
