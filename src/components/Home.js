import React from 'react'
import Header from "../components/Header"
import Cart from "../pages/Cart"
import Photos from "../pages/Photos"
import SearchBar from "./SearchBar"
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
            </Switch>
        </div>
    )
}

export default Home