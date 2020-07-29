import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignUp from '../components/login/SignUp';

describe("components/sign up ", ()=>{
test(" test input ", ()=>{
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

    const lastName = "khemiri"
    fireEvent.change(TextFieldLast , {target: { value : lastName} } )
    debug(TextFieldLast)
    expect(TextFieldLast.value).toContain(lastName)

    const TextFieldEmail =  getByLabelText(/Email Address/i);
    debug(TextFieldEmail);
    expect(TextFieldEmail).toBeTruthy();
    expect(TextFieldEmail).toHaveAttribute("type","email")  

    const TextFieldPass =  getByLabelText(/Password/i);
    debug(TextFieldPass);
    expect(TextFieldPass).toBeTruthy();
    expect(TextFieldPass).toHaveAttribute("type","password")

    
  
})

describe('test onclick Button', () => {
    it('should call onClick when clicked', () => {
        const { getByTestId } = render(
            <SignUp  />      
        );
        expect(getByTestId("submit")).toBeTruthy()   
        expect(fireEvent.click(getByTestId("submit"))).toBe(true);
    });
});
})