import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { theme } from '../theme';

const useStyles = makeStyles({
  root: {
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 1
  },
  mainBox: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    border: `1px solid ${theme.palette.common.black}`,
    padding: '.1rem .3rem',
    marginRight: '.4rem',
    borderRadius: '.5em'
  },
  logoText: {
    fontWeight: 'light',
    lineHeight: .8
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 1
  },
  subTitle: {
    textAlign: 'center',
    lineHeight: 1,
    borderBottom: `1px solid ${theme.palette.common.black}`,
    borderTop: `1px solid ${theme.palette.common.black}`,
    fontSize: '1rem',
    letterSpacing: '.2rem'
  }
})

export default function Logo() {
  const classes = useStyles();
  return (
    <div className={classes.mainBox}>
      <span className={classes.logo}>
        <Typography variant='h3' className={classes.logoText}>SR</Typography>
      </span>
      <span>
      <Typography variant='h5' className={classes.title}>SQUAREDR</Typography>
      <Typography variant='h6' className={classes.subTitle}>SOFTWARES</Typography>
      </span>
    </div>
  )
}
