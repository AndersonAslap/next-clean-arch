import { Product } from "../entities";

export interface ProductGateway {
    findAll(): Promise<Product[]>;
    findById(id: number): Promise<Product>;
}