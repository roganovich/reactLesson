import React, {useState} from "react";
import "./styles/App.css";
import Blog from "./components/Blog/Blog";

function App() {

    return (
        <div className="App">
            <Blog title="Короткие записи"/>
        </div>
    );
}

export default App;
