import React from "react";
import notFound from "../../Assets/Images/error.svg";

export default function NotFound() {
  return (
    <>
      <div className="text-center">
        <img src={notFound} alt="Not Found" />
      </div>
    </>
  );
}
