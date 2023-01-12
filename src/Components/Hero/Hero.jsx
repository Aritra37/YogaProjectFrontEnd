import React from "react";
import Image from "./HeroImg.jpg" 
function Hero(){
    return(
        <div>
            <img class="homeimg" src={Image} alt="heroimg"/>
            <p>To learn from experienced trainers 
            <br/>Join Us Now!!!
            </p>
            <h2>YOGA- A MUST THING FOR EVERY HEALTHY INDIVIDUAL</h2>
        </div>
    );
}

export default Hero;