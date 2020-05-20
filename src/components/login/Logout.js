import React from "react"
import {Link} from "react-router-dom"


export default function Logout(){
 localStorage.removeItem("token")
return (
<div>
    you have been logged 
    <Link to="/" > login again </Link>
</div>
)

}