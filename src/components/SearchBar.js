import React,{useState,useContext} from 'react';
import {Context} from "../Context";

function SearchBar(props){

    const [query,setQuery] = useState('')
    const {setSearchQuery} = useContext(Context)

    function search(query){
        setSearchQuery(query)
    }


    return (
        <>
        <input 
            type='text'
            placeholder='Search...'
            name='query'
            value={query}
            onChange={e=>setQuery(e.target.value)}
        />
        <button onClick={(e)=>{
            e.preventDefault()
            search(query)
        }}>Search</button>
        </>
    )
}

export default SearchBar