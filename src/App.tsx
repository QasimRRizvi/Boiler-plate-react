// import libraries
import * as React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, BrowserRouter as Router } from "react-router-dom";
// import custom
import IStore from "models/IStore";
import LoadingIndicator from "views/components/LoadingIndicator";
import Toasts from "views/components/toasts/Toasts";
import MainNav from "views/components/MainNav";
import RouteEnum from "./constants/RouteEnum";

const LoginPage = React.lazy(() => import("./views/LoginPage"));

interface IAppProps {
  children?: React.ReactNode;
  isAuthenticated?: boolean;
}

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path={RouteEnum.Login} component={LoginPage} />
      <Route path="/">
        <Redirect to={RouteEnum.Login} />
      </Route>
    </Switch>
  );
};

const PrivateRoutes = () => {
  return (
    <React.Fragment>
      <MainNav>
        <Switch>
          <Route exact path={RouteEnum.Dashboard} render={() => <div>Dashboard Coming Soon...</div>} />
          <Route exact path={RouteEnum.Customers} render={() => <div>Customers Coming Soon...</div>} />
          <Route exact path={RouteEnum.Orders} render={() => <div>Orders Coming Soon...</div>} />
          <Route path="/">
            <Redirect to={RouteEnum.Dashboard} />
          </Route>
        </Switch>
      </MainNav>
    </React.Fragment>
  );
};

const AppBase = ({ isAuthenticated }: IAppProps) => {
  return (
    <Router>
      <React.Suspense fallback={<LoadingIndicator isActive={true} />}>
        <React.Fragment>
          {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
          <Toasts />
        </React.Fragment>
      </React.Suspense>
    </Router>
  );
};

const mapStateToProps = (state: IStore) => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
  };
};

const App = connect(mapStateToProps)(AppBase);

export default App;
