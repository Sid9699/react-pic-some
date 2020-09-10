import React, { useState, useEffect } from "react";
import fire from "./config/fire";

const Context = React.createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const apiRoot = "https://api.unsplash.com"
  const [url,setUrl] = useState(`${apiRoot}/photos/random?client_id=5p1qlIpqKzXF62cVuY5H--PjwrGPDNM3cuFYnwfpY98&count=40`);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllPhotos(data)
        console.log(data)
      })
      .catch((e) => console.log(e));
  }, [url]);

  function toggleFavorite(id) {
    const updatedPhotos = allPhotos.map((photo) =>
      id === photo.id ? { ...photo, isFavorite: !photo.isFavorite } : photo
    );
    setAllPhotos(updatedPhotos);
  }

  function addToCart(img) {
    setCartItems((prevCartItems) => [...prevCartItems, img]);
    fire.firestore().collection('Cart').doc(fire.auth().currentUser.uid).set({
      cartItems
    });
  }

  function removeFromCart(id) {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
    fire.firestore().collection('Cart').doc(fire.auth().currentUser.uid).set({
      cartItems
    });
  }

  function emptyCart() {
    setCartItems([]);
  }

  function setSearchQuery(query){
    const queryUrl = `${apiRoot}/search/photos?page=1&query=${query}&client_id=5p1qlIpqKzXF62cVuY5H--PjwrGPDNM3cuFYnwfpY98&count=30`;
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
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
