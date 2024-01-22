import React, { useState } from "react";
import intelUtra from '../media/intelUltra.jpg'
import intelUnlocked from '../media/IntelUnlocked.jpeg';
import corei5 from "../media/corei5.webp"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
function Cpus(props){
    return <div>
        <div class="row ms-3" id="cpus">
            <div class="row">
                <h4>CPU:</h4>
                <div class="row ms-4 grid">
                    <div class="card col-xl-4 col-s-10 ms-3 mb-3">
                      <img src={intelUtra} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h5 class="card-title">Intel® Core™ Ultra Processors1</h5>
                        <p>Price: {props.price1} $</p>
                        <label for="quantity" class="label-form">Quantity (between 1 and 5):</label>
                        <input type="number" class="form-control" id="quantity" name="quantity" min="1" max="100"/>
                        <button onClick={props.handlePrice1} class="btn btn-success">Add to bag</button>
                   </div>
                 </div>
                 <div class="card col-xl-4 col-s-10 ms-3 mb-3">
                      <img src={intelUnlocked} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h5 class="card-title">Intel® Core™ Ultra Processor 9</h5>
                        <p>Price: {props.price2} $</p>
                        <p>Quantity: {props.quantityCpu2}</p>
                        <div class="row">
                             <button onClick={props.handlePrice2} class="btn btn-success">Add to bag</button>
                            <button class="btn btn-danger" onClick={props.handleRemoveCpu2}>Remove</button>
                        </div>
                   </div>
                 </div>
                 <div class="card col-xl-4 col-s-10 ms-3 mb-3">
                      <img src={corei5} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h5 class="card-title">Intel® Core™ i5 Processor (14th gen)2</h5>
                        <p>Price: {props.price3} $</p>
                        <button onClick={props.handlePrice3} class="btn btn-success">Add to bag</button>
                   </div>
                 </div>
             </div>
          </div>
            </div>
    </div>
};
export default Cpus;