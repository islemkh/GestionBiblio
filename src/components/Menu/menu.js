import React from "react"
import {NavLink} from 'react-router-dom'
export default function Menu(){

return (
  
    <ul>     
        <li>
        <NavLink to="/" >
             Home
              </NavLink>
        </li>
        <li>
        <NavLink to="/tasks"> tasks </NavLink>
        </li>
    </ul>


)

}