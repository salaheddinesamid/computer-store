import React, { useState } from "react";
import ram1 from "../media/ram1.jpeg";
import ram2 from "../media/ram2.webp";
import ram3 from "../media/ram3.jpeg";
export function Rams(){
    const [price1,setPrice1] = useState(100);
    const [price2,setPrice2] = useState(250);
    return <div>
        <div class="row ms-3">
            <div class="row">
                <h4>RAM:</h4>
                <div class="row ms-4 grid">
                    <div class="card col-xl-3 col-s-10 ms-3 mb-3">
                      <img src={ram1} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h5 class="card-title">G.Skill Trident Z5 Neo RGB DDR5-6000 (2 x 16GB)</h5>
                        <p>Price: {price1} $</p>
                        <a href="#" class="btn btn-success">Add to bag</a>
                   </div>
                   </div>
                   <div class="card col-xl-3 col-s-10 ms-3 mb-3">
                      <img src={ram2} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h4 class="card-title">Samsung DDR5-4800 (2 x 16GB)</h4>
                        <p>Price: {price2} $</p>
                        <a href="#" class="btn btn-success">Add to bag</a>
                   </div>
                   </div>
                   <div class="card col-xl-3 col-s-10 ms-3 mb-3">
                      <img src={ram3} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h5 class="card-title">TeamGroup T-Force Xtreem ARGB DDR4-3600</h5>
                        <p>Price: {price2} $</p>
                        <a href="#" class="btn btn-success">Add to bag</a>
                   </div>
                   </div>
                 </div>
            </div>
        </div>
    </div>
}