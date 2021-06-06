import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./components/header/header.comonent";
import Homepage from "./pages/homepage/Homepage.component";
import Shoppage from "./pages/shop/shoppage.component";

function App() {
  return (
    <div className="body">
      <Header/>
      <Switch>
        <Route exact path ="/" component = {Homepage} />
        <Route exact path ="/shop" component = {Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
