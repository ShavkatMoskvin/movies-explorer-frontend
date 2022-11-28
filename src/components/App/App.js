import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";

import api from "../../utils/MainApi.js";
import apiMovies from "../../utils/MoviesApi";

function App() {
  const [cards, setCards] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [errorMessage, setErrorMessage] = React.useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    apiMovies.getMovies()
      .then((cards) => {
        setCards(cards)
      })
      .catch((err) => {
        console.error(err.status, err.statusText)
      })
    getUserInfo()
  }, []);

  function getUserInfo() {
    api.getUserInfo()
      .then((data) => {
        setLoggedIn(true)
        setCurrentUser(data);
        if (localStorage.getItem('jwt') == null) {
          console.log(2, localStorage.getItem('jwt'));
          setLoggedIn(false)
        }
      })
      .catch((err) => {
        console.log(err.status, err.statusText);
      })
  }

  function login(data) {
    api.loginUser(data)
      .then(({ token }) => {
        if (token) {
          localStorage.setItem('jwt', token);
          api.updateToken(token)
          setLoggedIn(true);
          navigate('/movies');
          getUserInfo();
        }
      })
      .catch((res) => {
        if (res.status === 400) {
          setErrorMessage(`Oшибка: ${res.status}. Неверный логин или пароль`);
        } else {
          setErrorMessage(`Oшибка: ${res.status}. Что-то пошло не так`);
        }
      })
  }

  function register(data) {
    api.registerUser(data)
      .then(() => {
        login(data)
      })
      .catch((res) => {
        if (res.status === 400) {
          setErrorMessage(`Oшибка: ${res.status}. Невалидный логин или пароль`);
        } else {
          setErrorMessage(`Oшибка: ${res.status}. Что-то пошло не так`);
        }
      })
  }

  function signOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('foundSavedMovies');
    localStorage.removeItem('searchSavedMovieName');
    localStorage.removeItem('shortSavedFilms');
    localStorage.removeItem('foundMovies');
    localStorage.removeItem('searchMovieName');
    localStorage.removeItem('shortFilms');
    setLoggedIn(false);
    navigate('/')
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/"
          element={<>
            <Header loggedIn={loggedIn} />
            <Main />
            <Footer />
          </>}>
        </Route>

        <Route path="/sign-up"
          element={<>
            <Register errorMessage={errorMessage} register={register} />
          </>}>
        </Route>

        <Route path="/sign-in"
          element={<>
            <Login errorMessage={errorMessage} login={login} />
          </>}>
        </Route>

        <Route path="/movies"
          element={<>
            <Header loggedIn={loggedIn} />
            <ProtectedRoute component={Movies} cards={cards} loggedIn={loggedIn} />
            <Footer />
          </>}>
        </Route>

        <Route path="/profile"
          element={<>
            <Header loggedIn={loggedIn} />
            <ProtectedRoute component={Profile} currentUser={currentUser} signOut={signOut} loggedIn={loggedIn} />
          </>}>
        </Route>

        <Route path="/savedMovies"
          element={<>
            <Header loggedIn={loggedIn} />
            <ProtectedRoute component={SavedMovies} loggedIn={loggedIn} />
            <Footer />
          </>}>
        </Route>
        <Route path="*"
          element={<>
            <PageNotFound />
          </>}>
        </Route>

      </Routes>
    </div>
  );
}

export default App;