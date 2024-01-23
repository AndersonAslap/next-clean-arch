import { Cart, Product } from "@/@core/domain/entities";
import { CartGateway } from "@/@core/domain/gateways";

export class AddProductInCartUseCase {

    constructor(private cartGateway: CartGateway) {}

    execute(product: Product): Cart {
        const cart = this.cartGateway.get();
        cart.addProduct(product);
        this.cartGateway.save(cart);
        return cart;
    }   
}