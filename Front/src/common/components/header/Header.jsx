import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useStyles } from "./headerStyles";
import { Toolbar, AppBar, Hidden, IconButton, Button, Typography } from "@material-ui/core";
import { signOut } from "../../../auth/state/actions";

const Header = ({ user, signOut, history }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleLogout = () => signOut(() => history.push("/login"));

  const openMenu = () => setOpen(!open);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.header}>
          <Hidden mdUp>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={openMenu} className={classes.menuButton}></IconButton>
          </Hidden>
          <Hidden smDown>
            <div className={classes.header__items}>
              <Typography variant="h6">{user}</Typography>
              <div>
                <Link className={classes.link} to="/messages">
                  Main
                </Link>
                <Link className={classes.link} to="/messages/new">
                  Create New Message
                </Link>
                <Link className={classes.link} to="/messages/manage">
                  Manage My Messages
                </Link>
              </div>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ user: auth.user });

export default connect(mapStateToProps, { signOut })(withRouter(Header));
