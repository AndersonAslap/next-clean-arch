'use client'

import { ListProductsUseCase } from "@/@core/application/usecases/product";
import { Product } from "@/@core/domain/entities";
import { Registry, container } from "@/@core/infra/container-register";
import { useCart } from "@/hooks";
import Link from "next/link";
import { ShoppingCartSimple } from "phosphor-react";
import { useEffect, useState } from "react";

export default function Home() {

  const { addProduct } = useCart();

  const [products, setProducts] = useState<Product[]>([]);

  function handleAddItemToCart(product: Product) {
    addProduct(product);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const useCase = container.get<ListProductsUseCase>(Registry.ListProductUseCase);
        const data = await useCase.execute();
        setProducts(data || []);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <ul>
      {products.map((product, key) => (
        <li key={key}>
          <label><b>{product.name}</b></label>
          <Link href={`/product/${product.id}`}>
            Detalhes
          </Link> | &nbsp;
          <button onClick={() => handleAddItemToCart(product)}>
            <ShoppingCartSimple weight="fill" />
          </button>
        </li>
      ))}
    </ul>
  )
}