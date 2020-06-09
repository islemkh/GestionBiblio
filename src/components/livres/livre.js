import React from 'react'
//import MaterialTable from 'material-table';
import { useRouteMatch,useHistory} from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function Livre({ id,titre,auteur,edition}){
  console.log(auteur,'tty')

const history = useHistory()
     let { path } = useRouteMatch()
     const handleClick = () => {
        history.push(`${path}/${id}`);
    }
    return (
      <Paper>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id </TableCell>
            <TableCell>titre</TableCell>
            <TableCell>auteur</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            <TableRow>
              <TableCell component="tr" scope="row"> {id}
              </TableCell>
              <TableCell component="tr" scope="row">{titre}</TableCell>
              <TableCell component="tr" scope="row">{auteur}</TableCell>
              <TableCell component="tr" scope="row">{edition}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </Paper>
        
        )} 
  
