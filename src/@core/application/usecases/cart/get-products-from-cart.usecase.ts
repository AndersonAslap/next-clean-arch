import { Cart } from "@/@core/domain/entities";
import { CartGateway } from "@/@core/domain/gateways";

export class GetProductsFromCartUseCase {

    constructor(private cartGateway: CartGateway) {}

    execute(): Cart {
        return this.cartGateway.get();
    }
}