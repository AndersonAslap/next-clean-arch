'use client';

import { CartContext } from "@/context";
import { useContext } from "react";

export function useCart() {
    const cartContext = useContext(CartContext);
    return cartContext;
}