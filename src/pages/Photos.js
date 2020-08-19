import React, { useContext } from "react";
import "../App.css";
import Image from "../components/Image";
import { Context } from "../Context";
import { getClass } from "../utils";

function Photos(props) {
  const { allPhotos } = useContext(Context);
  const photos = allPhotos.map((photo, i) => (
    <Image key={photo.id} img={photo} className={getClass(i)} />
  ));

  return <main className="photos">{photos}</main>;
}

export default Photos;
