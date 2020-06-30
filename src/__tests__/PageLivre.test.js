import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import PageLivre from '../components/pageLivre/PageLivre';
import user from '@testing-library/user-event'
describe("Add livre", ()=>{
    test("test input modal add livre ", ()=>{
        const {debug, getByPlaceholderText, getByTestId,getByLabelText} = render(
        <PageLivre />
        )
       
        const inputTitle =  getByPlaceholderText(/ajouter titre/i);
        debug(inputTitle);
        expect(inputTitle).toBeTruthy();
        expect(inputTitle).toHaveAttribute("type","text")
        const titre = "Le Petit Prince"
        fireEvent.change(inputTitle , {target: { value : titre} } )

        debug(inputTitle)
        expect(inputTitle).toHaveValue(titre)
    
        const inputAuteur =  getByPlaceholderText(/Ajouter auteur/i);
        debug(inputAuteur);
        expect(inputAuteur).toBeTruthy();
        expect(inputAuteur).toHaveAttribute("type","text")

         const inputEdition =  getByLabelText(/edition/i);
        debug(inputEdition);
        expect(inputEdition).toBeTruthy();
        expect(inputEdition).toHaveAttribute("type","text")
        
        const inputNB =  getByLabelText(/nbre d'exemplaire/i);
        debug(inputNB);
        expect(inputNB).toBeTruthy();
        expect(inputNB).toHaveAttribute("type","number") 
    
        expect(getByTestId("submit")).toBeTruthy() 
    })
    test("input search",()=>{
     const {debug, getByPlaceholderText, getByTestId,getByLabelText} = render(
        <PageLivre />)
        const input =  getByPlaceholderText(/Search/i);
        debug(input);
        expect(input).toBeTruthy();
        expect(input).toHaveAttribute("type","search")  

        const titre = "Le Petit Prince"
        user.type(input,titre)
    })
   
    
    }) 
    