import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignUp from '../components/login/SignUp';


describe("should contains email et password", ()=>{
test(" should contains email", ()=>{
    const {debug, getByLabelText, getByTestId} = render(
    <SignUp />
    )
    const TextField =  getByLabelText(/First Name/i);
    debug(TextField);
    expect(TextField).toBeTruthy();
    expect(TextField).toHaveAttribute("type","text")  

    const name = "ines"
    fireEvent.change(TextField , {target: { value : name} } )
    debug(TextField)
    expect(TextField.value).toContain(name)

    const TextFieldLast =  getByLabelText(/Last Name/i);
    debug(TextFieldLast);
    expect(TextFieldLast).toBeTruthy();
    expect(TextFieldLast).toHaveAttribute("type","text")
    const TextFieldEmail =  getByLabelText(/Email Address/i);
    debug(TextFieldEmail);
    expect(TextFieldEmail).toBeTruthy();
    expect(TextFieldEmail).toHaveAttribute("type","email")  

    const TextFieldPass =  getByLabelText(/Password/i);
    debug(TextFieldPass);
    expect(TextFieldPass).toBeTruthy();
    expect(TextFieldPass).toHaveAttribute("type","password")

    expect(getByTestId("submit")).toBeTruthy()
  
})
/* test("test button",()=>{
    const {debug, getByTestId} = render(
        <SignUp />
        )
    //event click button
    const addDemande =jest.fn()
    const submitBt = getByTestId("submit")
    fireEvent.click(submitBt)
    expect(addDemande).toHaveBeenCalled()

}) */
})