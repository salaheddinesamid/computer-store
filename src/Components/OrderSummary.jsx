import React from "react";
export function OrderSummary(props){
    
    return (
        <div>
            <div class="row mt-4">
            <div  class="row mt-4">
                <h3 class="text-center">Order Summary:</h3>
                <div class="row">
                    <div class="container">
                        {props.totalPrice}
                    </div>
                </div>
                <div class="row">
                    <button class="btn btn-success" id="confirmation" onClick={props.Confirm}>Confirm Order</button>
                </div>
            </div>
            </div>
            </div>
    )
}