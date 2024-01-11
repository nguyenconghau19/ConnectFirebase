
import { DataGrid } from '@mui/x-data-grid';
import { getDatabase, ref, get, child } from 'firebase/database';
import { useDemoData } from '@mui/x-data-grid-generator';
import React, { useEffect, useState } from 'react';
import '../firebase'
const columns = [
  { field: 'id', headerName: 'So Thu Tu', width: 70 },
  { field: 'uid', headerName: 'ma the', width: 70 },
  { field: 'UserName', headerName: 'teenme', width: 130 },


];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  const [data, setData] = useState([])
  useEffect(() => {
    const db = ref(getDatabase());
    let hau = [];
    get(child(db, `UsersData/`)).then((snapshot => {
      snapshot.forEach((snapshotChild) => {
        if (snapshotChild !== null) {
          hau.push({ id: snapshotChild.key, ...snapshotChild.val() })
          setData(hau)

        }

      })
    }))

  }, [])

  return (
    <div className="Container">
      <h1 className='TitleContainer'>Hello  DataGrid</h1>
      <div className='Table' style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}