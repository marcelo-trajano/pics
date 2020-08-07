import React from "react";

const ImageList = (props) => {
  return props.list.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.small}></img>;
  });
};

export default ImageList;
