import axios from "axios";
import { createContext } from "react";

export let cartContext = createContext();

export default function CartContextProvider(props) {
  let headers = {
    token: localStorage.getItem("userToken"),
  };

  function addToCart(productId) {
    return axios.post(
      "https://ecommerce.routemisr.com/api/v1/cart",
      {
        productId,
      },
      {
        headers: headers,
      }
    );
  }

  return (
    <cartContext.Provider value={{addToCart}}>
      {props.children}
    </cartContext.Provider>
  );
}
