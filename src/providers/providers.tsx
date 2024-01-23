import { CartProvider } from "@/context";

export function Providers({children}: {children: React.ReactNode}) {
    return (
        <CartProvider>
            {children}
        </CartProvider>
    )
}