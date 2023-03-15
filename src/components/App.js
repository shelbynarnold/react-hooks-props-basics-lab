import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
import Links from "./Links"

function App() {
  return (
    <div>
      <NavBar />
      <Home name = {user.name} city = {user.city} color = {user.color}/>
      <About bio = {user.bio} />
      <Links github = {user.links.github} linkedin = {user.links.linkedin}/>
    </div>
  );
}

export default App;

// Finally, App should also pass down the github and linkedin links to the About component, so that About can pass those props down to the Links component you will create.