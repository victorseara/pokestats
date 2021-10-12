import Home from "pages/Home/Home";
import SearchResult from "pages/Search/Search";
import { HashRouter, Route, RouteProps, Switch } from "react-router-dom";

const routes: RouteProps[] = [
  { path: "/", exact: true, component: Home },
  { path: "/:query", exact: true, component: SearchResult },
];

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        {routes.map((route) => (
          <Route {...route} key={JSON.stringify(route)} />
        ))}
      </Switch>
    </HashRouter>
  );
};

export default Routes;
