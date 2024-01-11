import { getDatabase, ref, get, child } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import '../firebase'
import { TableCell, TableContainer, TableHead, TableRow, Table, TableBody, recomposeColor } from '@mui/material';

const FirebaseWithArr = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const db = ref(getDatabase());
        let arrData = [];
        get(child(db, `UsersData/`)).then((snapshot => {
            snapshot.forEach((snapshotChild) => {
                if (snapshotChild.val() !== null) {
                    arrData.push({ id: snapshotChild.key, ...snapshotChild.val() })
                    setData(arrData);
                }
            })
        }))

    }, [])
  
    return (
        <div className='Contain'>
            <h1 className='TitleContainer'>Hello Array</h1>
            <div className="Table">
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>STT</TableCell>
                                <TableCell>UID</TableCell>
                                <TableCell>Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((id, index) => {
                                return (
                                    <TableRow>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{id.uid}</TableCell>
                                        <TableCell>{id.UserName}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};


export default FirebaseWithArr;