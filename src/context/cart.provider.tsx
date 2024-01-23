'use client';

import { AddProductInCartUseCase, ClearCartUseCase, GetProductsFromCartUseCase, RemoveProductFromCartUseCase } from "@/@core/application/usecases/cart";
import { Cart, Product } from "@/@core/domain/entities";
import { Registry, container } from "@/@core/infra/container-register";
import { createContext, useCallback, useEffect, useMemo, useState } from "react"

type CartContextType = {
    cart: Cart
    addProduct: (product: Product) => void 
    removeProduct: (productId: number) => void 
    clear: () => void 
    reload: () => void
}

const defaultContext = {cart: new Cart({products: []})} as CartContextType;

export const CartContext = createContext(defaultContext);

const addProductInCartUseCase = container.get<AddProductInCartUseCase>(Registry.AddProductInCartUseCase);
const removeProductFromCartUseCase = container.get<RemoveProductFromCartUseCase>(Registry.RemoveProductFromCartUseCase);
const clearCartUseCase = container.get<ClearCartUseCase>(Registry.ClearCartUseCase);
const getProductsFromCartUseCase = container.get<GetProductsFromCartUseCase>(Registry.GetProductsFromCartUseCase);

export function CartProvider({children}: {children: React.ReactNode}) {

    const [cart, setCart] = useState<Cart>(defaultContext.cart);

    const addProduct = useCallback((product: Product) => {
        const cart = addProductInCartUseCase.execute(product);
        setCart(cart);
    }, []);

    const removeProduct = useCallback((productId: number) => {
        const cart = removeProductFromCartUseCase.execute(productId);
        setCart(cart);
    }, []);

    const clear = useCallback(() => {
        const cart = clearCartUseCase.execute();
        setCart(cart);
    }, []);

    const reload = useCallback(() => {
        const cart = getProductsFromCartUseCase.execute();
        setCart(cart);
    }, []);

    useEffect(() => {
        reload();
    }, [reload]);

    return (
        <CartContext.Provider 
            value={{ 
                cart, 
                addProduct, 
                removeProduct, 
                clear,
                reload
            }}
        >
            {children}
        </CartContext.Provider>
    )
}