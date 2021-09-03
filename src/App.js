import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage"
import FavoritesPage from "./pages/FavoritesPage"
import HomePage from "./pages/HomePage"
import HeaderNavBar from "./components/HeaderNavBar"

function App() {
  
  return (
    <Router>
      <div className="App">
      <HeaderNavBar />
      <Switch>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/search">
          <SearchPage />
        </Route>

        <Route path="/favorites">
          <FavoritesPage />
        </Route>

      </Switch>
      </div>
    </Router>
  );
}

export default App;
