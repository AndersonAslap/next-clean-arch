import { Product } from "@/@core/domain/entities";
import { ProductGateway } from "@/@core/domain/gateways";
import { AxiosInstance } from "axios";

export class ProductHttpGateway implements ProductGateway {
    constructor(private http: AxiosInstance) {}

    async findAll(): Promise<Product[]> {
        return this.http.get<Product[]>('/products').then((res) => res.data.map((p) => new Product({
            id: p.id,
            name: p.name,
            description: p.description,
            price: p.price
        })));
    }

    async findById(id: number): Promise<Product> {
        return this.http.get<Product>(`/products/${id}`).then((res) => new Product({
            id: res.data.id,
            name: res.data.name,
            description: res.data.description,
            price: res.data.price,
        }));
    }
}