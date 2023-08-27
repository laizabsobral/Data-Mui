import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';


function App() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70},
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'age', headerName: 'Age', width: 70},
  ];

  const rows = [
    { id: 1, name: 'Ana', age: '25'},
    { id: 2, name: 'Joana', age: '17'},
    { id: 2, name: 'Daniela', age: '42'},
  ];
 
  return (
    <div style={{height: 300, width: '100%'}}>
        <DataGrid columns={columns} rows={rows}/>
    </div>
  );
}

export default App;
