// import libraries
import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { useHistory } from "react-router";
import { useTheme } from "@material-ui/core/styles";
import { AppBar, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@material-ui/core";
// import icons
import AssessmentIcon from "@material-ui/icons/Assessment";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Group from "@material-ui/icons/Group";
import MenuIcon from "@material-ui/icons/Menu";
// import custom
import AppMainMenu from "./HeaderActionMenu";
import { IMainNavProps } from "./models/IMainNav";
// import styles
import { useStyles } from "./styles";

const MainNavBase = ({ children, email }: IMainNavProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar classes={{ root: classes.headerContainer }}>
          <div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              RxStat Admin Panel
            </Typography>
          </div>
          <div>
            <Typography>{email}</Typography>
            <AppMainMenu />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>{theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={() => history.push("/dashboard")}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={() => history.push("/customers")}>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItem>
          <ListItem button onClick={() => history.push("/orders")}>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    email: state.authReducer.email,
  };
};
const MainNav = connect(mapStateToProps)(MainNavBase);

export default MainNav;
