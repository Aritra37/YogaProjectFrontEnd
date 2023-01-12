import React from "react";
import Image1 from "./Morning 1.jpg";
import Image2 from "./Morning 2.jpg";
import Image3 from "./Morning 3.jpg";
import Image4 from "./Evening 1.jpg";
function Batch(){
    return(
        <div>
            <img class="img1" src={Image1} alt="img1"/>
            <h3>Batch-1(6am-7am)</h3>
            <img class="img2" src={Image2} alt="img2"/>
            <h3 class="b2">Batch-2(7am-8am)</h3>
            <img class="img3" src={Image3} alt="img3"/>
            <h3 class="b3">Batch-4(5pm-6pm)</h3>
            <img class="img4" src={Image4} alt="img4"/>
            <h3 class="b4">Batch-3(8am-9am)</h3>
            <h1>Batches</h1>
        </div>
    );
}

export default Batch;