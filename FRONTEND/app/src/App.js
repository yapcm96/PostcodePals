import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import TasksPage from "./pages/TasksPage";
import TaskPage from "./pages/TaskPage";
import NewTaskPage from "./pages/NewTaskPage";
//import Task from "./components/Task/Task"

function App() {
  //
  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/tasks" component={TasksPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/tasks/new" component={NewTaskPage} />
        <Route exact path="/tasks/:id" component={TaskPage} />
        
        
      </Switch>
    </div>
  );
}

export default App;


