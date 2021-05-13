import "./style.css";
import "./index.css";
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Notes from "./components/notes";

function App(){
  return(
    <div>
      <Header />
      <Notes />
      <Footer />
    </div>
  )
}

export default App;
