import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from '../components/login/login';
describe("should contains email et password", ()=>{
test(" should contains email", ()=>{
    const {debug, getByLabelText, getByTestId} = render(
    <Login />
    )
    const TextField =  getByLabelText(/Email Address/i);
    debug(TextField);
    expect(TextField).toBeTruthy();
    expect(TextField).toHaveAttribute("type","email")  

    const TextFieldPass =  getByLabelText(/Password/i);
    debug(TextFieldPass);
    expect(TextFieldPass).toBeTruthy();
    expect(TextFieldPass).toHaveAttribute("type","password")

    expect(getByTestId("submit")).toBeTruthy() 
})

test(" should FIRE EVENTS  ", ()=>{
    const {debug, getByLabelText} = render(
    <Login />
    )
    const input =  getByLabelText(/Email Address/i);
    const email =  "admin@gmail.com"
    fireEvent.change(input , {target: { value : email} } )
    debug(input)
    expect(input).toHaveValue(email)
    

})

})