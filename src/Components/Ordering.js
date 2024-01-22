import React from "react";
import { Rams } from "./Rams";

import Cpus from "./Cpus";
export function Ordering(props){
    return(
        <div>
            <div class="row">
                <h3>Place your order:</h3>
            </div>
            <div class="orderPlace mt-4">
            <Cpus price1={props.price1} price2={props.price2} quantityCpu2={props.quantity} handleRemoveCpu2={props.handleRemoveCpu2} price3={props.price3} handlePrice1={props.handlePrice1} handlePrice2={props.handlePrice2} handlePrice3={props.handlePrice3} />
            <Rams />
        </div>
</div>
    )
}