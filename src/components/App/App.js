import React from "react";
import { Route, Routes } from "react-router-dom";

import './App.css'

import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Main from "../Main/Main.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import Movies from "../Movies/Movies.js";
import Profile from "../Profile/Profile.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import PageNotFound from "../PageNotFound/PageNotFound.js";

function App() {
  return (
    <div className="App">
      <Routes>

        <Route exact path="/"
          element={<>
            <Header loggedIn={false} />
            <Main />
            <Footer />
          </>}>
        </Route>

        <Route path="/sign-up"
          element={<>
            <Register />
          </>}>
        </Route>

        <Route path="/sign-in"
          element={<>
            <Login />
          </>}>
        </Route>

        <Route path="/movies"
          element={<>
            <Header loggedIn={true} />
            <Movies/>
            <Footer />
          </>}>
        </Route>

        <Route path="/profile" 
        element={<>
            <Header loggedIn={true} />
            <Profile/>
        </>}>          
        </Route>

        <Route path="/savedMovies" 
        element={<>
            <Header loggedIn={true} />
            <SavedMovies/>
        </>}>          
        </Route>

        <Route path="404"
        element={<>
          <PageNotFound />
        </>}>
        </Route>

      </Routes>
    </div>
  );
}

export default App;