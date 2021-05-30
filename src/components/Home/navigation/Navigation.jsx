import React from 'react'
import '../../../App.css'
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Button } from '@material-ui/core';
import styles from '../material-customized/navbarsStyle'
import Header from '../material-customized/Header'
import { Link } from 'react-router-dom';

function Navigation() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div id="back-to-top-anchor">
      <Header
        color="transparent"
        style={{fontFamily: 'Goldman'}}
        brand={<Link to="/" className="header__name">Rabius Sunny</Link>}

        rightLinks={
          <List className={classes.list}>

            <Link to="/portfolio">
              <ListItem className={classes.listItem}>
                <Button
                  className={classes.navLink}
                >
                  <span className="nav__link">Projects</span>
                  </Button>
              </ListItem>
            </Link>
            <Link to="/resume">
              <ListItem className={classes.listItem}>
                <Button
                  className={classes.navLink}
                >
                  <span className="nav__link">Resume</span>
                  </Button>
              </ListItem>
            </Link>
            <Link to="/blog">
              <ListItem className={classes.listItem}>
                <Button
                  className={classes.navLink}
                >
                  <span className="nav__link">Blog</span>
                  </Button>
              </ListItem>
            </Link>
            <Link to="/contact">
              <ListItem className={classes.listItem}>
                <Button
                  className={classes.navLink}
                >
                  <span className="nav__link">Contact</span>
                  </Button>
              </ListItem>
            </Link>
          </List>
        }
      />
    </div>
  )
}

export default Navigation
