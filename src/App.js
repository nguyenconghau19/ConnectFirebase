
import React from 'react';
import "./connectFirebase/FirebaseWithArr";
import  FirebaseWithArr  from "./connectFirebase/FirebaseWithArr";
import FirebaseWithDataGrid from "./connectFirebase/FirebaseWithDataGrid";
import FirebaseWithObject from "./connectFirebase/FirebaseWithObject";
import "./App.css"
const App = () => {

  return (
    <div>
      <FirebaseWithArr/>
      <FirebaseWithDataGrid/>
      <FirebaseWithObject/>
     
    </div>
  )
}
export default App;