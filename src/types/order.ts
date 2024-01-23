import { Product } from "."

export type Order = {
    id: number 
    products: Product[]
    credit_card_number: string
}