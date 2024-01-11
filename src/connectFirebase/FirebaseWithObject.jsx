
import { getDatabase, ref, get, child } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import '../firebase'
import { TableCell, TableContainer, TableHead, TableRow, Table, TableBody } from '@mui/material';

const FirebaseWithObject = () => {
    const [data, setData] = useState([]);
    const [test, setTest] = useState([]);
    useEffect(() => {
        const db = ref(getDatabase());

        get(child(db, `UsersData/`)).then((snapshot => {
            if (snapshot.val() !== null) {
                setData(snapshot.val());
                setTest(snapshot.val().ABC.UserName); // get only data
                
            }
        }))
    }, [])
    // console.log("Object:",data);  
    return (
        <div className='Container'>
            <h1 className='TitleContainer'>Hello  Object</h1>
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
                            {Object.keys(data).map((id, index) => {
                                return (
                                    <TableRow>
                                        <TableCell>{index+1}</TableCell>
                                        <TableCell>{data[id].uid}</TableCell>
                                        <TableCell>{data[id].UserName}</TableCell>
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


export default FirebaseWithObject;