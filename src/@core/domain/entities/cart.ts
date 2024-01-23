import { Product } from "."

export type CartProps = {
    products: Product[]
}

export class Cart {
    constructor(private props: CartProps) {}

    addProduct(product: Product) {
        this.props.products.push(product);
    }

    removeProduct(productId: number) {
        this.props.products = this.props.products.filter(
            (product) => product.id !== productId
        );
    }

    clear() {
        this.props.products = [];
    }

    get total(): number {
        return this.props.products.reduce((total, product) => {
            return total + product.props.price
        }, 0);
    }

    get products(): Product[] {
        return this.props.products;
    }
}