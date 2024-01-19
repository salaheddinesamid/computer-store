import React from "react";
export function OrderConfirmation(props){
    
    return (
        <div>
            <div class="row mt-4">
            <div  class="row mt-4">
                <h3 class="text-center">Order Confirmation:</h3>
                <div id="receipt" class="row">
                <div class="row ms-4">
                    <div class="col-xl-6">
                        <p>First Name: {props.firstName}</p>
                    </div>
                    <div class="col-xl-6">
                        <p>Last Name: {props.lastName}</p>
                    </div>
                </div>
                <div class="row ms-4">
                    <div class="col-xl-6">
                        <p>Email: {props.email}</p>
                    </div>
                    <div class="col-xl-6">
                        <p>Address: {props.address}</p>
                    </div>
                </div>
                <div class="row ms-4">
                    <div class="col-xl-6">

                    </div>
                    <div class="col-xl-6">
                        <p>Total Price: {props.total} $</p>
                    </div>
                </div>
                <div class="row">
                    <button class="btn btn-success" id="confirmation" onClick={props.Confirm}>Confirm Order</button>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}