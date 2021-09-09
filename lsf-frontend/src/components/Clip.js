import React from "react";
//Cannot use until have SSL cert
export const Clip = ({ clip }) => {
  return (
    <iframe
      src={clip}
      title={clip}
      frameBorder="0"
      scrolling="no"
      allowFullScreen={false}
    ></iframe>
  );
};
