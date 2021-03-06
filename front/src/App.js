import React from "react";
import "./App.css";
import NotesPages from "./pages/NotesPages";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotesForm from "./pages/NotesForm";
import GlobalNotesProvider from "./context/provider/GlobalNotesProvider";
import GobalUserProvider from "./context/provider/GobalUserProvider";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Profile from "./pages/Profile";
import FormImg from "./components/FormImg";
import ImgProvider from "./context/provider/ImgProvider";
import ImgPages from "./pages/ImgPages";
import ProfileImg from "./pages/ProfileImg";

function App () {
  return (
    <Router>
      <GobalUserProvider>
        <GlobalNotesProvider>
          <ImgProvider>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route component={NotesForm} path="/note/edite/:id" />
                <Route component={NotesPages} path="/notes"/>
                <Route component={ImgPages} path="/images"/>
                <Route component={ProfileImg} path="/img/profile/:id"/>
                <Route component={Signin} path="/auth/signin"/>
                <Route component={Signup} path="/auth/signup"/>
                <Route component={Profile} path="/profile"/>
                <Route component={NotesForm} path="/add"/>
                <Route component={FormImg} path="/upload"/>
                <Route component={FormImg} path="/img/edite/:id"/>
                <Route component={Home} exact path="/"/>
              </Switch>
            </div>
          </div>
          </ImgProvider>
        </GlobalNotesProvider>
      </GobalUserProvider>
    </Router>
  );
}

export default App;
