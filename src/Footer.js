import React from "react";

export const Footer = () => {
    let footstyle = {
        position : "absolute",
        down : "0vh",
        width : "100%"
    }
  return (
    <div className="bg-dark text-light py-3" style={footstyle}>
      <p className="text-center"> &copy; Gaurav Gupta </p>
    </div>
  );
};
