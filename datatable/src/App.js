import './App.css';
import { TableContainer, Table, TableRow, TableCell, TableBody, TableHead} from '@mui/material';

const data = [
  { id: 1, name: 'Ana', age: '25'},
  { id: 2, name: 'Joana', age: '17'},
  { id: 2, name: 'Daniela', age: '42'},
];

function App() {
  return (
   <TableContainer>
      <Table>
         <TableHead>
            <TableCell> ID </TableCell>
            <TableCell> Nome </TableCell>
            <TableCell> Idade </TableCell>
         </TableHead>

         <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell> {row.id} </TableCell>
                <TableCell> {row.name}</TableCell>
                <TableCell> {row.age} </TableCell>
              </TableRow>
            ))}
         </TableBody>
      </Table>
   </TableContainer>
  );
}

export default App;
