import { Cart } from "@/@core/domain/entities";
import { CartGateway } from "@/@core/domain/gateways";

export class RemoveProductFromCartUseCase {

    constructor(private cartGateway: CartGateway) {}

    execute(productId: number): Cart {
        const cart = this.cartGateway.get();
        cart.removeProduct(productId);
        this.cartGateway.save(cart);
        return cart;
    }
}