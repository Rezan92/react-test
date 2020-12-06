import "./App.css";
import Nav from "./components/Nav";
import { Route, Switch } from "react-router-dom";
import ModulesContainer from "./components/ModulesContainer";
import Radar from "./pages/Radar";
import Bar from "./pages/Bar";
import { ChartProvider } from "./components/Context";

function App() {
  return (
    <ChartProvider>
      <div className="app-container">
        <Nav />
        <ModulesContainer />
        <Switch>
          <Route path="/" exact component={Radar} />
          <Route path="/bar" component={Bar} />
        </Switch>
      </div>
    </ChartProvider>
  );
}

export default App;
