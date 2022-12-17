import React, { useState, useEffect } from "react";
import fire from "./config/fire";

const Context = React.createContext();

function ContextProvider(props) {
  const [user, setUser] = useState(null);
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const apiRoot = "https://api.unsplash.com";
  const [url, setUrl] = useState(
    `${apiRoot}/photos/random?client_id=5p1qlIpqKzXF62cVuY5H--PjwrGPDNM3cuFYnwfpY98&count=30`
  );
  const [favouriteItems, setFavouriteItems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        url.slice(25, 30) === "photo"
          ? setAllPhotos(data)
          : setAllPhotos(data.results);
      })
      .catch((e) => console.log(e));
  }, [url]);

  useEffect(() => {
    if (fire.auth().currentUser) {
      fire.firestore().collection("cart").doc(fire.auth().currentUser.uid).set({
        cartItems,
      });
    }
  }, [cartItems]);

  useEffect(() => {
    if (fire.auth().currentUser) {
      fire
        .firestore()
        .collection("favourite")
        .doc(fire.auth().currentUser.uid)
        .set({
          favouriteItems,
        });
    }
  }, [favouriteItems]);

  useEffect(() => {
    if (user) {
      fire
        .firestore()
        .collection("cart")
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) setCartItems(doc.data().cartItems);
        });

      fire
        .firestore()
        .collection("favourite")
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) setFavouriteItems(doc.data().favouriteItems);
        });
    }
  }, [user]);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
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

  function addToFav(img) {
    setFavouriteItems((prevFavItems) => [...prevFavItems, img]);
  }

  function removeFromFav(id) {
    setFavouriteItems((prevFavItems) =>
      prevFavItems.filter((item) => item.id !== id)
    );
  }

  function setSearchQuery(query) {
    const queryUrl = `${apiRoot}/search/photos?page=1&per_page=30&query=${query}&client_id=5p1qlIpqKzXF62cVuY5H--PjwrGPDNM3cuFYnwfpY98&count=30`;
    setUrl(queryUrl);
  }

  return (
    <Context.Provider
      value={{
        user,
        allPhotos,
        toggleFavorite,
        cartItems,
        addToCart,
        removeFromCart,
        emptyCart,
        setSearchQuery,
        setUrl,
        favouriteItems,
        addToFav,
        removeFromFav,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
