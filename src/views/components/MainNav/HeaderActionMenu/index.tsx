// import libraries
import * as React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { IconButton, ListItemIcon, ListItemText, MenuItem } from "@material-ui/core";
import Menu, { MenuProps } from "@material-ui/core/Menu";
// import icons
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import custom
import * as AuthAction from "stores/auth/AuthAction";
import { IAppMainMenuProps } from "../models/IHeaderActionMenu";
// import colors
import * as ColorMap from "constants/colorMap";
// import styles
import { useStyles } from "./styles";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(() => ({
  root: {
    color: ColorMap.TextPrimaryColor,
    "& > :first-child": {
      minWidth: "40px",
    },
  },
}))(MenuItem);

const AppMainMenuBase = ({ logout }: IAppMainMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const classes = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    handleClose();
    logout();
  };

  return (
    <div>
      <IconButton aria-controls="app-main-menu" aria-haspopup="true" onClick={handleClick}>
        <ArrowDropDownIcon className={classes.appMainMenuIcon} />
      </IconButton>
      <StyledMenu id="app-main-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <StyledMenuItem onClick={logoutHandler}>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};
const mapDispatchToProps = (dispatch: any) => ({
  logout: () => dispatch(AuthAction.logout()),
});

const AppMainMenu = connect(null, mapDispatchToProps)(AppMainMenuBase);

export default AppMainMenu;
