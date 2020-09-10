import React,{useState,useContext} from 'react';
import {Context} from "../Context";
import "../App.css"

function SearchBar(props){

    const [query,setQuery] = useState('')
    const {setSearchQuery} = useContext(Context)

    function search(query){
        setSearchQuery(query)
    }


    return (
        <div className='search-bar'>
        <input 
            className='search-input'
            type='text'
            placeholder='Search...'
            name='query'
            value={query}
            onChange={e=>setQuery(e.target.value)}
        />
        <button className='search-button' onClick={(e)=>{
            e.preventDefault()
            search(query)
        }}>Search</button>
        </div>
    )
}

export default SearchBar