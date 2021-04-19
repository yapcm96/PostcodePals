import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import AskerPage from "./pages/AskerPage";
import VolunteerPage from "./pages/VolunteerPage";

function App() {
  //
  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/volunteer" component={VolunteerPage} />
        <Route exact path="/asker" component={AskerPage} />
      </Switch>
    </div>
  );
}

export default App;
