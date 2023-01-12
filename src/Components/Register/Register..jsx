import React from "react";

function Register(){
    return(
        <div>
            <h1>Register Us Now!!!</h1>
            
            <input class="first" type="text" placeholder="First Name"/>
            <input class="last" type="text" placeholder="Last Name"/>
            <input class="email" type="text" placeholder="Email Id" />
            <input class="age" type="text" placeholder="Age"/>
            <input class="phone" type="text" placeholder="Phone Number"/>
            <input class="gender" type="text" placeholder="Gender"/>
            <input class="height" type="text" placeholder="Height"/> 
            <input class="weight" type="text" placeholder="Weight"/>
            <button class="submit">Submit</button>
        </div> 
    );
}

export default Register;