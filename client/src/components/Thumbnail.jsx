import React from "react";

export default function Thumbnail(props) {
  return (
    <img
      src={props.src}
      alt="stuff"
      onClick={props.onClick}
      className="img-thumbnail"
    />
  );
}
