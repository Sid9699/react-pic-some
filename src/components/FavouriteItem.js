import React, {useContext} from 'react';
import { Context } from "../Context";

function FavouriteItem({item}){

    const { removeFromFav } = useContext(Context);

    return (
        <div className="cart-item">
            <i
                onClick={() => removeFromFav(item.id)}
                className="ri-delete-bin-line"
            ></i>
            <img src={item.urls.small} width="130px" />
        </div>
    )
}

export default FavouriteItem;