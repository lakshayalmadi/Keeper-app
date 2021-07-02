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
  function deleteNote(id){
    setNote(prevNotes=>{
      return prevNotes.filter((noteItem, index)=>{
        return index!== id;
      })
    })
  }
  return(
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem, index)=>{
        return <Note 
        key={index}
        id={index}
        title={noteItem.title} 
        content={noteItem.content} 
        onDelete={deleteNote}
        />
      })}
      <Footer style={{position:'fixed'}}/>
    </div>
  )
}

export default App;
