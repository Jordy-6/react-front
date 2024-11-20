import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Home from "./pages/Home.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import Header from "./components/Header.jsx";
import React, {useContext} from "react";
import Users from "./pages/Users.jsx";
import {ThemeContext} from "./context/ThemeContext.jsx";
import classNames from "classnames";

function App() {

    const { theme } = useContext(ThemeContext);


  return (
    <>
        <div className={classNames("w-100 vh-100", {
            "bg-dark text-light": theme === "dark",
            "bg-light text-dark": theme === "light"
        })}>
            <div className="row">
                <Header/>
            </div>
            <div className="p-3">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/welcome" element={<Welcome/>}/>
                    <Route path="/users" element={<Users />}/>
                    <Route path="/books/:id" element={<BookDetails/>}/>
                </Routes>
            </div>
        </div>
    </>
  )
}

export default App
