import { StrictMode , useState} from "react";
import { render } from "react-dom";
import {BrowserRouter as Router,Route,Switch, Link} from 'react-router-dom'; 
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
//import Pet from './Pet';

// const App = () => {
//     return React.createElement(
//         "div",
//         {},[
//         React.createElement("h1",{id:"my-brand"},"Adopt Me"),
//         // ...[1,2,3,4].map(i => React.createElement("h2",{},i)),
//         React.createElement(Pet,
//         {name: "Luna",
//         animal: "Dog",
//         breed: "Havanese",}),
//         React.createElement(Pet,{name: "Pepper",
//         animal: "Bird",
//         breed: "Cockatiel",}),
//         React.createElement(Pet,{ name: "Doink", animal: "Cat", breed: "Mix" }),
//     ]
//     );
// };//Babel is converting below JSX to these createElement React calls for us so that browser can undestand it!!

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
    <div>
      <Router>
      <header>
      <Link to="/">
      <h1>Adopt Me!</h1>
      </Link>
      </header>
      <Switch>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path = "/">
          <SearchParams />
      </Route>
      </Switch>
      </Router>
      {/* <Pet name = "Luna" animal = "Dog" breed = "Havanese"/>
            <Pet name = "Pepper" animal = "Bird" breed = "Cockatiel"/>
            <Pet name = "Doink" animal = "Cat" breed = "Mix"/> */}
    </div>
    </ThemeContext.Provider>
  );
};
render(<StrictMode><App /></StrictMode>, document.getElementById("root")); //Note that void tags or self closing tags needs a trailing slash in react,like <input />
