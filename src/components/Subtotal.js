import React from 'react';
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css"
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';

export default function Subtotal({price}) {
    const [{basket}] = useStateValue();
    return (
        <div className="subtotal">
            {/**Price */}
            <CurrencyFormat 
                renderText={value => 
                <div>
                    <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/> This order contains a gift
                    </small>
                </div>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />
            <button>Procced to checkout</button>
        </div>
    )
}
