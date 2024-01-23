import { Cart } from "../entities";

export interface CartGateway {
    get(): Cart;
    save(cart: Cart): void;
}