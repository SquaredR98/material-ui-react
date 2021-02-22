import React, { useState, useEffect } from 'react';
import { useScrollTrigger, Tabs, Tab, Button, Menu, MenuItem, AppBar, Toolbar, useMediaQuery, SwipeableDrawer, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '3rem',
		[theme.breakpoints.down("md")]: {
			marginBottom: '2rem',
		},
		[theme.breakpoints.down("xs")]: {
			marginBottom: '.5rem',
		}
	},
	logo: {
		height: '7rem',
		[theme.breakpoints.down("md")]: {
			height: "6rem"
		},
		[theme.breakpoints.down("xs")]: {
			height: "4rem"
		}
	},
	tabContainer: {
		marginLeft: 'auto',
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: '25px',
	},
	button: {
		...theme.typography.estimate,
		borderRadius: '50px',
		marginLeft: '50px',
		marginRight: '25px',
		height: '45px',
	},
	logoContainer: {
		padding: 0,
		"&:hover": {
			backgroundColor: "transparent"
		}
	},
	menu: {
		backgroundColor: theme.palette.common.blue,
		color: "white",
		borderRadius: 0
	},
	menuItem: {
		...theme.typography.tab,
		opacity: 0.7,
		"&:hover": {
			opacity: 1
		},
	},
	drawerIcon: {
		fontSize: "3rem",
		color: "white"
	},
	drawerIconContainer: {
		marginLeft: "auto",
		"&:hover": {
			backgroundColor: "transparent"
		},
	},
	drawer: {
		backgroundColor: theme.palette.common.blue
	},
	drawerItem: {
		...theme.typography.tab,
		color: 'white',
		opacity: 0.7
	},
	drawerItemSelected: {
		"& .MuiListItemText-root": {
			opacity: 1
		}
	},
	drawerItemEstimate: {
		backgroundColor: theme.palette.common.orange
	},
	appbar: {
		zIndex: theme.zIndex.modal + 1
	}

}));

export default function Header() {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"))
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	const [openDrawer, setOpenDrawer] = useState(false)
	const [value, setValue] = useState(0);
	const [anchorEl, setAnchorEl] = useState(null)
	const [openMenu, setOpenMenu] = useState(false)
	const [selectedIndex, setSelectedIndex] = useState(0)

	const handleChange = (e, newValue) => {
		setValue(newValue);
	};

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget)
		setOpenMenu(true)
	}

	const handleMenuItemClick = (e, i) => {
		setAnchorEl(null)
		setOpenMenu(false)
		setSelectedIndex(i)
	}

	const handleClose = () => {
		setAnchorEl(null)
		setOpenMenu(false)
	}

	const menuOptions = [
		{
			name: 'Services',
			link: "/services",
			activeIndex: 1,
			selectedIndex: 0
		},
		{
			name: 'Custom Software Development',
			link: "/customsoftware",
			activeIndex: 1,
			selectedIndex: 1
		},
		{
			name: "Mobile App Development",
			link: "/mobileapps",
			activeIndex: 1,
			selectedIndex: 2
		},
		{
			name: "Website Development",
			link: "/websites",
			activeIndex: 1,
			selectedIndex: 3
		}
	]

	const routes = [
		{
			name: 'Home',
			link: "/",
			activeIndex: 0
		},
		{
			name: 'Services',
			link: "/services",
			activeIndex: 1,
			ariaOwns: anchorEl ? "simple-menu" : undefined,
			ariaPopUp: anchorEl ? "true" : undefined,
			mouseOver: event => handleClick(event)
		},
		{
			name: "The Revolution",
			link: "/revolution",
			activeIndex: 2
		},
		{
			name: "About Us",
			link: "/about",
			activeIndex: 3
		},
		{
			name: "Contact Us",
			link: "/contact",
			activeIndex: 4
		}
	]



	const tabs = (
		<React.Fragment>
			<Tabs
				value={value}
				onChange={handleChange}
				className={classes.tabContainer}
				indicatorColor="primary"
			>
				{routes.map((route, index) => (
					<Tab
						key={`${route}${index}`}
						className={classes.tab}
						component={Link}
						to={route.link}
						label={route.name}
						aria-owns={route.ariaOwns}
						aria-haspopup={route.ariaPopUp}
						onMouseOver={route.mouseOver}
					/>
				))}
			</Tabs>
			<Button
				variant="contained"
				color="secondary"
				className={classes.button}
				component={Link}
				to="/estimate"
			>
				Free Estimate
			</Button>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				open={openMenu}
				onClose={handleClose}
				MenuListProps={{ onMouseLeave: handleClose }}
				classes={{ paper: classes.menu }}
				elevation={0}
				keepMounted
				style={{ zIndex: 1302 }}
			>
				{menuOptions.map((option, i) => (
					<MenuItem
						component={Link}
						to={option.link}
						classes={{ root: classes.menuItem }}
						onClick={(event) => { handleMenuItemClick(event, i); setValue(1) }}
						selected={i === selectedIndex && value === 1}
						key={`${option}${i}`}
					>
						{option.name}
					</MenuItem>
				))}
			</Menu>
		</React.Fragment>
	)

	const drawer = (
		<React.Fragment>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => openDrawer(true)}
				classes={{ paper: classes.drawer }}
			>
				<div className={classes.toolbarMargin} />
				<List disablePadding>
					{routes.map((route, index) => (
						<ListItem
							key={`${route}${index}`}
							divider
							button
							component={Link}
							to={route.link}
							selected={value === route.activeIndex}
							classes={{ selected: classes.drawerItemSelected }}
							onClick={() => { setOpenDrawer(false); setValue(route.activeIndex) }}
						>
							<ListItemText
								disableTypography
								className={classes.drawerItem}
							>
								{route.name}
							</ListItemText>
						</ListItem>
					))}

					<ListItem
						divider
						onClick={() => { setOpenDrawer(false); setValue(5) }}
						selected={value === 5}
						button
						component={Link}
						to="/estimate"
						classes={{ root: classes.drawerItemEstimate, selected: classes.drawerItemSelected }}
					>
						<ListItemText
							className={classes.drawerItem}
							disableTypography
						>
							Free Estimate
						</ListItemText>
					</ListItem>
				</List>
			</SwipeableDrawer>
			<IconButton
				onClick={() => setOpenDrawer(!openDrawer)}
				disableRipple
				className={classes.drawerIconContainer}
			>
				<MenuRoundedIcon className={classes.drawerIcon} />
			</IconButton>
		</React.Fragment>
	)

	useEffect(() => {
		[...menuOptions, ...routes].forEach(route => {
			switch (window.location.pathname) {
				case `${route.link}`:
					if (value !== route.activeIndex) {
						setValue(route.activeIndex)
						if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
							setSelectedIndex(route.selectedIndex)
						}
					} break;
				default:
					break;
			}
		})
	}, [value, menuOptions, selectedIndex, routes])


	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar className={classes.appbar}>
					<Toolbar disableGutters>
						<Button
							component={Link} to="/"
							className={classes.logoContainer}
							onClick={() => setValue(0)}
							disableRipple
						>
							<img
								src={logo}
								alt="Company Logo"
								className={classes.logo}
							/>
						</Button>
						{matches ? drawer : tabs}
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}
