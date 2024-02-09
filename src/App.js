import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import NotFound from './Pages/NotFound';
import MovieList from './Pages/MovieList';
import MovieDetails from './Pages/MovieDetails';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import FavoritesPag from './Pages/FavoritesPage';





function App() {
  return (
    <div>
        <BrowserRouter> 
          <Navbar />
          <Switch> 
              <Route exact path={"/"} component={Home} /> 
              <Route exact path={"/SignUp"} component={SignUp} />
              <Route exact path={"/MovieList"} component={MovieList} />
              <Route exact path={"/movie/:movieId"} component={MovieDetails} />
              <Route exact path={"/Login"} component={Login} />
              <Route exact path={"/Favorites"} component={FavoritesPag} />
             
              <Route exact path={"*"} component={NotFound} />
            </Switch> 
        </BrowserRouter>
        
    </div>
  );
}

export default App;
