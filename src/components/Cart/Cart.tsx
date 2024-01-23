'use client'

import { useCart } from "@/hooks"
import Link from "next/link";
import { BagSimple } from "phosphor-react";

export function Cart() {

    const { cart} = useCart();

    return (
        <nav className=".bag">
            <Link href="/checkout">
                <BagSimple size={24} weight="fill" /> 
                <span>{cart.products.length} Items | R$ {cart.total}</span>
            </Link>
        </nav>
    )
}