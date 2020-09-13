import React,{useContext} from 'react';
import { Context } from "../Context";
import FavouriteItem from "../components/FavouriteItem";

function Favourite(props){

    const { favouriteItems } = useContext(Context);

    const favItemsElements = favouriteItems.map((item) => (
        <FavouriteItem key={item.id} item={item} />
      ));

    return (
        <main className="cart-page">
            <h1>Favourite</h1>
            {favItemsElements}
        </main>
    )
}

export default Favourite;