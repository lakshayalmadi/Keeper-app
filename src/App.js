import "./style.css";
import "./index.css";
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import CreateArea from "./components/CreateArea";


function App(){
  return(
    <div>
      <Header />
      <CreateArea />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  )
}

export default App;
