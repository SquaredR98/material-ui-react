import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
    '&hover': {
      backgroundColor: "transparent",
    }
  },
  logo: {
    border: `1px solid ${theme.palette.common.black}`,
    padding: ".1rem .3rem",
    marginRight: ".4rem",
    borderRadius: ".5em",
  },
  logoText: {
    fontWeight: "bold",
    lineHeight: 0.8,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 1,
  },
  subTitle: {
    textAlign: "center",
    lineHeight: 1,
    borderBottom: `1px solid ${theme.palette.common.black}`,
    borderTop: `1px solid ${theme.palette.common.black}`,
    fontSize: "1rem",
    letterSpacing: ".2rem",
    fontWeight: "bold",
  },
}));

export default function Logo({ setValue }) {
  const classes = useStyles();
  return (
    <Button
      disableRipple
      disableElevation
      component={Link}
      className={classes.root}
      to="/"
      onClick={() => setValue(0)}
    >
      <span className={classes.logo}>
        <Typography variant="h3" className={classes.logoText}>
          SR
        </Typography>
      </span>
      <span>
        <Typography variant="h5" className={classes.title}>
          SQUAREDR
        </Typography>
        <Typography variant="h6" className={classes.subTitle}>
          SOFTWARES
        </Typography>
      </span>
    </Button>
  );
}
