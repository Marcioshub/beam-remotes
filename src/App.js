import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Troubleshooting from "./pages/Troubleshooting";
import Privacy from "./pages/Privacy";
import PageNotFound from "./pages/Page404";

function App() {
  return (
    <Router>
      {/* <Navigationbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/troubleshooting" component={Troubleshooting} />
        <Route exact path="/privacystatement" component={Privacy} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
