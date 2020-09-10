import React,{useState,useContext} from 'react';
import {Context} from "../Context";
import "../App.css"

function SearchBar(props){

    const [query,setQuery] = useState('')
    const {setSearchQuery, setUrl} = useContext(Context)

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
            onChange={e=>{
                e.target.value === '' && setQuery('')
                e.target.value === ''?
                    setUrl(`https://api.unsplash.com/photos/random?client_id=5p1qlIpqKzXF62cVuY5H--PjwrGPDNM3cuFYnwfpY98&count=30`):
                    setQuery(e.target.value)
            }}
        />
        <button className='search-button' onClick={(e)=>{
            e.preventDefault()
            search(query)
        }}>Search</button>
        </div>
    )
}

export default SearchBar