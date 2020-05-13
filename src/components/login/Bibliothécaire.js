import React from "react"
import {Link,Redirect} from "react-router-dom"


export default function Bibliothécaire(){
const token = localStorage.getItem("token")
let loggedIn = true
if(token == null){
    loggedIn = false
}
if (loggedIn == false ){
    return <Redirect to="/"></Redirect> 
}
return (
  
<div>
    welcome to admin page<br></br>
    <Link to="/logout">logout</Link>
</div>

)

}