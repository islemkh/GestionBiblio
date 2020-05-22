import React, { Component } from 'react'
import MaterialTable from 'material-table';
import { useRouteMatch,useHistory} from 'react-router-dom'




function Adherent(
        { id,
        titre,
         auteur}
     ){
        const history = useHistory()
        let { path } = useRouteMatch()
        const handleClick = () => {
           history.push(`${path}/${id}`);
       }
    
        return (
            <div>
    <MaterialTable
      title="liste des livres"
      columns={[
          { title: 'titre', field: 'titre' },
          { title: 'auteur', field: 'auteur' },
          { title: 'edition', field: 'edition', type: 'numeric' },
          { title: 'NbExemplaires', field: 'NbExemplaires', type: 'numeric' },
        ]}
     /*  //data={}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              //setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }} */
    />
 </div>
        )}
