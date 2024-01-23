'use client';

import { GetProductUseCase } from "@/@core/application/usecases/product";
import { Product } from "@/@core/domain/entities";
import { Registry, container } from "@/@core/infra/container-register";
import { useCart } from "@/hooks";
import { ShoppingCartSimple } from "phosphor-react";
import { useEffect, useState } from "react";

type Props = {
    params: {
        id: number
    }
}

export const revalidate = 60 * 3; // revalida a página toda a cada 3min

export default function ProductDetailPage({ params } : Props) {

    const [product, setProduct] = useState<Product>({} as Product);

    useEffect(() => {
        async function fetchData() {
          try {
            const useCase = container.get<GetProductUseCase>(Registry.GetProductUseCase);
            const data = await useCase.execute(params.id);
            setProduct(data || {});
          } catch (error) {
            console.error("Erro ao buscar o produto:", error);
          }
        }
    
        fetchData();
      }, []);

    const { addProduct } = useCart();

    function handleAddItemToCart(product: Product) {
        addProduct(product);
    }
    
    return (
        <>
            <b>{product.name}</b> <br />
            R$ {product.price} &nbsp; | &nbsp;
            <button>
                <ShoppingCartSimple onClick={() => handleAddItemToCart(product)} weight="fill" />
            </button>
        </>
    )
}