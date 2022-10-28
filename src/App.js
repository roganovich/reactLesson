import React from "react";
import BlogItem from "./components/BlogItem";
import "./styles/App.css";

function App() {
    return (
        <div className="App">
            <BlogItem title="1. First" body="Text Text Text Text Text Text Text"/>
            <BlogItem title="2. Second" body="Text Text Text Text Text Text Text"/>
            <BlogItem title="3. Third" body="Text Text Text Text Text Text Text"/>
        </div>
    );
}

export default App;
