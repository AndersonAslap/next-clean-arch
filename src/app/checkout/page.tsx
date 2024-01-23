'use client';

import { CurrencyCircleDollar, TrashSimple } from "phosphor-react";
import { FormEvent } from "react";

export default function CheckoutPage() {

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <div>
            <div>
                <h3>Meu Carrinho</h3>
                <ul>
                    <li>
                        <b>Teclado Gamer</b> | qtd: 4 | R$ 4,00 | <TrashSimple weight="fill" color="red" />
                    </li>
                    <li>
                        <b>Teclado Gamer</b> | qtd: 4 | R$ 4,00 | <TrashSimple weight="fill" color="red" />
                    </li>
                    <li>
                        <b>Teclado Gamer</b> | qtd: 4 | R$ 4,00 | <TrashSimple weight="fill" color="red" />
                    </li>
                    <li>
                        <b>Teclado Gamer</b> | qtd: 4 | R$ 4,00 | <TrashSimple weight="fill" color="red" />
                    </li>
                    <li>
                        <b>Total</b> : R$ 4,00
                    </li>
                </ul>
            </div>
            <hr />
            <div style={{marginTop: '16px'}}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Cartão de crédito</label> <br />
                        <input
                            type="text"
                            name="credit_card_number"
                            id="credit_card_number"
                        />
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                        >
                            <b>Finalizar comprar</b>
                            <CurrencyCircleDollar weight="fill" size={20}/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}