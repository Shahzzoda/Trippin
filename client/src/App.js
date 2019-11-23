import React from 'react';
import {  
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import TripFormPage from './pages/TripFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';

import './App.css';


function Navigation(props) {
  return (
    <div class="container-fluid navbar">
      <nav class="navbar-expand-lg navbar-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Trippin <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item nav-links">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item nav-links">
            <a class="nav-link" href="/posts/new">Blog</a>
          </li>
          <li class="nav-item nav-links">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item nav-links">
            <a class="nav-link" href="/about-us">About Us</a>
          </li>
        </ul>
      </div>
        </nav>
      </div>

          /*
    <nav className="navbar">
        <span className="navbar-toggle" id="js-navbar-toggle">
          <i className="fas fa-bars" />
        </span>
        <a href="#" className="logo">Trippin</a>
        <ul className="main-nav" id="js-menu">
          <li>
            <a href="/" className="nav-links">Home</a>
          </li>
          <li>
            <a href="/posts/new" className="nav-links">Blog</a>
          </li>
          <li>
            <a href="/" className="nav-links">Login</a>
          </li>
          <li>
            <a href="/about-us" className="nav-links">About Us</a>
          </li>
        </ul>
      </nav> */ 


  );
}


class App extends React.Component {
  render() {
    return (
        <Router>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/posts/new" component={TripFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/" component={PostsListPage} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;



// what are the minimum needs of the frontend?
// - profile 
//    - header 
//      - name 
//      - photo
//      - bio 
//      - total posts 
//      - total countries  
//    - image grid
//      - image card 
//      - image card pop up with caption, date, location
// - nav bar 
//    - profile/"home"
//    - upload page 
//    - map functionality 
// what are the reusable componenets?
//    - image cards
//    - user photo 
//    - map functionality 
// how will the pages be seperated?
//    - i was thinking two pages, and a reusable componenets page that spans across both 
//    - pages. 