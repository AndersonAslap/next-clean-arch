import { Order } from "@/types";
import { Suspense } from "react";

type Props = {
    params: {
        id: string
    }
}

export const revalidate = 60 * 3;

export default async function CheckoutSuccessPage({params}: Props) {

    const response = await fetch(`http://localhost:8000/orders/${params.id}`);
    const order = await response.json() as Order;

    return (
        <Suspense>
            <h3>Parabéns sua compra ID:{order.id} foi efetivada</h3>
            <ul>
                {order.products.map((product) => (
                    <li key={product.id}>
                        Produto {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </Suspense>
    )
}