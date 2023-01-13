import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import LoginPage from "./LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path='/login' component={LoginPage}/>
          <Route path='/' component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
