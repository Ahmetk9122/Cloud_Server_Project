import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Home/Homepage";
import {Link,Switch,Route,Routes} from 'react-router-dom';
import Buypage from "./components/Buy/Buypage";
import { createContext } from "react";

const ProductContext =createContext();

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" exact element={<Homepage/>}></Route>
        <Route path="/buy" element={<Buypage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
