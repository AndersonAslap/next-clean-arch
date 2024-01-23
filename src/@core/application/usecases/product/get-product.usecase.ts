import { Product } from "@/@core/domain/entities";
import { ProductGateway } from "@/@core/domain/gateways";

export class GetProductUseCase {

    constructor(private productGateway: ProductGateway){}

    async execute(id: number): Promise<Product> {
        return (await this.productGateway.findById(id));
    }
}