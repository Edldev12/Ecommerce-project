import { useContext } from "react";
import { CartContext } from "../contaxt/CartContext";

export function useCart() {
  return useContext(CartContext);
}