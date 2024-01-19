import React from "react";
import {Routes, Route, useNavigate, BrowserRouter} from 'react-router-dom'
export function Confirmation(){
    const nav = useNavigate();
    function GoBack(){
        nav('/');
    }
    return <div>
        <div class="row">
            <h1 class="text-center">Thank You!</h1>
        </div>
        <div id="digitalReceipt" class="row">
            
        </div>
        <div>
            <button class="btn btn-danger" onClick={GoBack}>Go back to home</button>
        </div>
    </div>
}