import "./style.css";
import "./index.css";
import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import CreateArea from "./components/CreateArea";


function App(){
  const [notes, setNote]=useState([]);
  
  function addNote(newNote){
    setNote(prevNote=> {
      return [...prevNote, newNote];
    })
  }
  return(
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem)=>{
        return <Note title={noteItem.title} content={noteItem.content}/>
      })}
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  )
}

export default App;
