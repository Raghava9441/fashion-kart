import { Route, Switch } from "react-router";
import "./App.css";
import Homepage from "./pages/homepage/Homepage.component";

function App() {
  return (
    <div className="body">
      <Switch>
        <Route exact path ="/" component = {Homepage} />
      </Switch>
    </div>
  );
}

export default App;
