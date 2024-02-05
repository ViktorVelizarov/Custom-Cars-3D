"use client"

import React, { Suspense} from "react";
export default function AllCars(){
 
    return (
       <>
       <a  href="/cars/Mclaren720">
       <img className="h-20 w-56  "src="https://www.motortrend.com/uploads/bg-index/2020-mclaren-720s-convertible.png?fit=around%7C875:492.1875"></img>
       </a>
       <a href="/cars/BmwE34">
       <img className="h-20 w-56 "src="https://preview.redd.it/my-new-car-v0-xv4kfpbje6gb1.png?auto=webp&s=9c600668925099a1920b2cc289ce55aadb2bb6cd"></img>
       </a>
       <a href="/cars/BmwM8">
       <img className="h-20 w-56 "src="https://www.motortrend.com/uploads/sites/5/2020/08/2021-BMW-M8.png"></img>
       </a>
       <a href="/cars/Mustang">
       <img className="h-20 w-56 "src="https://pngimg.com/d/mustang_PNG31.png"></img>
       </a>
       <a href="/cars/Porsche">
       <img className="h-20 w-56 "src="https://prod.r3eassets.com/assets/content/carlivery/porsche-motorsport-1-12014-image-big.png"></img>
       </a>
       <a href="/cars/Nissan">
       <img className="h-20 w-56 "src="https://di-uploads-pod16.dealerinspire.com/nissanofduarte0818/uploads/2021/12/Nissan-400z.png"></img>
       </a>
       <a href="/cars/Lada">
        <img className="h-20 w-56 "src="https://pngimg.com/d/lada_PNG129.png"></img></a>
       </>
    )
}