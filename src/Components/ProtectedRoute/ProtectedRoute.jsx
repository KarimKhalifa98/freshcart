import React from "react";

export default function ProtectedRoute(props) {
  if (localStorage.getItem("userToken") !== null) {
    return props.children;
  } else {
    window.location.href = "/login";
  }
}
