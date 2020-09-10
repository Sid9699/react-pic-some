import React, { useState, useEffect } from "react";
import fire from "./config/fire";

const Context = React.createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const apiRoot = "https://api.unsplash.com"
  const [url,setUrl] = useState(`${apiRoot}/photos/random?client_id=5p1qlIpqKzXF62cVuY5H--PjwrGPDNM3cuFYnwfpY98&count=30`);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        url.slice(25,30) === 'photo'?
          setAllPhotos(data):
          setAllPhotos(data.results)
        console.log(data)
      })
      .catch((e) => console.log(e));
  }, [url]);

  useEffect(()=>{
    if(fire.auth().currentUser === null){

    }else{
      fire.firestore().collection('Cart').doc(fire.auth().currentUser.uid).set({
        cartItems
      })
    }
  },[cartItems])

  function toggleFavorite(id) {
    const updatedPhotos = allPhotos.map((photo) =>
      id === photo.id ? { ...photo, isFavorite: !photo.isFavorite } : photo
    );
    setAllPhotos(updatedPhotos);
  }

  function addToCart(img) {
    setCartItems((prevCartItems) => [...prevCartItems, img]);
    
  }

  function removeFromCart(id) {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  }

  function emptyCart() {
    setCartItems([]);
  }

  function setSearchQuery(query){
    const queryUrl = `${apiRoot}/search/photos?page=1&per_page=30&query=${query}&client_id=5p1qlIpqKzXF62cVuY5H--PjwrGPDNM3cuFYnwfpY98&count=30`;
    setUrl(queryUrl)
  }

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartItems,
        addToCart,
        removeFromCart,
        emptyCart,
        setSearchQuery,
        setUrl,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
