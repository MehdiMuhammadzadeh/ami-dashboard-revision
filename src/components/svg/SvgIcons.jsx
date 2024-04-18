import React from "react";

const SvgIcons = ({src, onClick,color}) => {
  return (
    <img src={src} onClick={onClick} color={color} />
  );
};

export default SvgIcons;
