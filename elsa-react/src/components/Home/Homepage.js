import React,{useState} from "react";
import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import BootstrapSwitchButton from "bootstrap-switch-button-react";
//import Switchi from "@material-ui/core/Switch";
//import Stack from "@mui/material/Stack";
//import Typography from "@mui/material/Typography";
//import Accordion from "react-bootstrap/Accordion";
//import Slider from '@mui/material/Slider';
//import Box from '@mui/material/Box';
//import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";
import { Link, Switch, Route, Routes } from "react-router-dom";
import Buypage from "../Buy/Buypage";
import Detail from "../Detail/Detail";
import Card from './Cards/Card';
import Cardtwo from './Cards/Cardtwo';
import Data from '../Data/Data.js';
import Linux from './Linux'
import Windows from "./Windows";
import products from '../Data/products.json'


function Homepage() {
  const [active,setActice] =useState("FirstCard");
  return (
    
    <div className="container">
      <h1 className="font">
        Bulut Sunucu-Bulut Altyapısı ile Hızlı Sunucu Deneyimi!
      </h1>
      <p className="first-text">
        Yüksek performanslı Bulut Sunucular (Cloud Server) ile web sitelerinize
        en kaliteli sunucu hizmeti alın.
      </p>
      <p className="second-text">
        En uygun Fiyatlarla <b>Bulut Sunucu Kiralayın!</b>
      </p>
      <div className="container">
        <div className="row">
          <div className="col-7 vote-page">
            <div className="container">
              <div>
                <div
                  className="row"
                  style={{ justifyContent: "space-around" }}
                >
                  <div className="col platform-1">
                    <button
                      onClick={()=>setActice("FirstCard")}
                      className="platform-linux btn btn-light"
                      style={{ backgroundColor: "#FEF8E7" }}
                    >
                      <div className="row">
                        <div className="col">
                          <img
                            src="img/linux.png"
                            style={{ width: "40px", height: "40px" }}
                          ></img>
                          Linux
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="col platform-2">
                    <button
                       onClick={()=>setActice("SecondCard")}
                      className="platform-windows btn btn-light"
                      style={{ backgroundColor: "#E6F7FE" }}
                    >
                      <div className="row">
                        <div className="col">
                          <img
                            src="img/windows.png"
                            style={{ width: "40px", height: "40px" }}
                          ></img>{" "}
                          Windows
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                {active === "FirstCard" &&  <Linux title="Linux" />}
                {active === "SecondCard" &&  <Windows title="Windows" />}
               
              </div>
            </div>
          </div >
          <div className="col-5">
          <Detail />
          </div>
         
        </div>
      </div>
      <Routes>
        <Route path="/" exact></Route>
        <Route path="/buy" element={<Buypage />}></Route>
      </Routes>
    </div>
  );
}

export default Homepage;
