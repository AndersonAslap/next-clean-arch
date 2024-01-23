import { Product } from "@/@core/domain/entities";
import { ProductGateway } from "@/@core/domain/gateways";

export class ListProductsUseCase {

    constructor (private productGateway: ProductGateway) {}

    async execute(): Promise<Product[]> {
        return this.productGateway.findAll();
    }
}