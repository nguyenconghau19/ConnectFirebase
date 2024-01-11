import './firebase';
import React, {useState, useEffect} from 'react';
import { getDatabase, ref, child, get } from "firebase/database";

function getFirebase() {
  const [data, setData] =  useState([]);
  const [show, setShow] =  useState(false);
  useEffect(() => {
    GetData();
  }, []);
  function GetData() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `UsersData/`)).then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        setData(snapshot.val());
        Checker();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
  function Checker() {
    if (data.ABC) {
      setShow(true);
      console.log(data.ABC.ID);
    } else {
      setShow(false);
    }
  }
 
  return (
    <div className="App">
      {show ? (
        <h1>{data.ABC.UserName}</h1>
      ): null}
      <button onClick={GetData}>nhấn đi</button>
    </div>
  );
}

export default getFirebase;
