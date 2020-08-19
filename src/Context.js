import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data))
      .catch((e) => console.log(e));
  }, []);

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

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartItems,
        addToCart,
        removeFromCart,
        emptyCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
