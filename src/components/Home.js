import React from 'react'
import Header from "../components/Header"
import Cart from "../pages/Cart"
import Photos from "../pages/Photos"
import SearchBar from "./SearchBar"
import Footer from "./Footer"
import Favourite from "../pages/Favourite"
import "../App.css"
import { Switch, Route } from "react-router-dom"

function Home(props){

    return (
        <div className="App">
            <Header />
            <SearchBar />
            <Switch>
            <Route exact path="/">
                <Photos />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
            <Route path="/favourite">
                <Favourite/>
            </Route>
            </Switch>
            <Footer/>
        </div>
    )
}

export default Home