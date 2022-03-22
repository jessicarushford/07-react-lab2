import React from "react";

import "./App.css";
import Header from "./components/Header";
import SocialPosts from "./components/SocialPosts";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SocialPosts />
      </main>
    </div>
  );
}

export default App;
