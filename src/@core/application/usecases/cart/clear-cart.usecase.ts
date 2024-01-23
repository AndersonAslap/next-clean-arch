import { Cart } from "@/@core/domain/entities";
import { CartGateway } from "@/@core/domain/gateways";

export class ClearCartUseCase {

    constructor(private cartGateway: CartGateway) {}

    execute(): Cart {
        const cart = this.cartGateway.get();
        cart.clear();
        this.cartGateway.save(cart);
        return cart;
    }
}