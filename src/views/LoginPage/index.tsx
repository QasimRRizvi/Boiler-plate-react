// import libraries
import * as React from "react";
import { connect } from "react-redux";
import { Button, FormControl, IconButton, TextField, Typography } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
// import custom
import IStore from "models/IStore";
import * as REGEX from "constants/regex";
import ToastStatusEnum from "constants/ToastStatusEnum";
import * as AuthAction from "stores/auth/AuthAction";
import * as ToastActions from "stores/toasts/ToastAction";
import * as IAuth from "stores/auth/models/IAuth";
import * as IToasts from "stores/toasts/models/IToast";
import { ILoginInput, ILoginProps } from "./models/ILogin";
import { useStyles } from "./styles";
// import colors
import * as ColorMap from "constants/colorMap";
// import images
import logo from "images/logo-name-vert.png";

const textFieldInputProps = {
  WebkitBoxShadow: `0 0 0 1000px ${ColorMap.LoginWrapperBackgroundColor} inset`,
  WebkitTextFillColor: ColorMap.TextPrimaryColor,
};

const LoginBase: React.FC<ILoginProps> = ({ login, addToast }: React.PropsWithChildren<ILoginProps>) => {
  const [state, setState] = React.useState<ILoginInput>({ email: "", password: "", showPassword: false, emailError: false });
  const classes = useStyles();

  const handleChange = (prop: keyof ILoginInput) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [prop]: event.target.value });
  };

  const handleClickErrorUpdate = (prop: keyof ILoginInput, flag: boolean) => {
    setState({ ...state, [prop]: flag });
  };

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const submit = (e: any) => {
    e.preventDefault();
    const { email, password } = state;
    if (REGEX.EMAIL_REGEX.test(email)) {
      handleClickErrorUpdate("emailError", false);
      login({ email, password });
    } else {
      handleClickErrorUpdate("emailError", true);
      addToast({
        id: "1",
        type: ToastStatusEnum.Error,
        message: "Please provide valid email",
      });
    }
  };

  return (
    <div className={classes.loginWrapper}>
      <div className={classes.loginContainer}>
        <div className={classes.loginLeftPanel}></div>
        <div className={classes.loginRightPanel}>
          <div>
            <div className={classes.loginHeader}>
              <img src={logo} alt="RxStat" />
              <Typography variant="body1">Sign into your account</Typography>
            </div>
            <div className={classes.loginBody}>
              <form onSubmit={submit}>
                <FormControl>
                  <TextField
                    id="login-email"
                    label="Enter Your Email"
                    variant="outlined"
                    size="small"
                    type="text"
                    error={state.emailError}
                    helperText={state.emailError ? "Please enter valid email e.g: abc@xyz.com" : null}
                    inputProps={{
                      style: textFieldInputProps,
                    }}
                    onChange={handleChange("email")}
                  />
                </FormControl>
                <FormControl className={classes.passwordFieldContainer}>
                  <TextField
                    id="login-password"
                    label="Enter Your Password"
                    variant="outlined"
                    type={state.showPassword ? "text" : "password"}
                    size="small"
                    inputProps={{
                      style: textFieldInputProps,
                    }}
                    onChange={handleChange("password")}
                  />
                  <IconButton aria-label="toggle password visibility" className={classes.showPasswordIcon} onClick={handleClickShowPassword}>
                    {state.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </FormControl>
                <Button variant="contained" type="submit" color="primary" className={classes.loginButton}>
                  Login
                </Button>
              </form>
            </div>
            <div className={classes.loginFooter}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IStore) => {
  return {
    isLoading: state.authReducer.isLoading,
  };
};
const mapDispatchToProps = (dispatch: Function) => {
  return {
    login: (credentials: IAuth.ILoginCredentials) => dispatch(AuthAction.login(credentials)),
    addToast: (data: IToasts.IToast) => dispatch(ToastActions.addToast(data)),
  };
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginBase);

export default Login;
