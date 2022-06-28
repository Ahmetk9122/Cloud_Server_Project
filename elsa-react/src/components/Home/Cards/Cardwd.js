import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import BootstrapSwitchButton from "bootstrap-switch-button-;
import Switchi from "@material-ui/core/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Accordion from 'react-bootstrap/Accordion'
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import './card.css'
import "axios";
import axios from "axios";
import { CPU, calculateCpu, RAM, calculateRam, HDD, calculateHdd, TRAFIC, calculateTrafic } from '../../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { handleControlPanelWindSelect, handleProductWindChange } from "../../../redux/slice/productWind";
import { handleFeaturesWindSelect, handleFeaturesWindChange } from "../../../redux/slice/featureWind";
import { handleSoftTechChange,handleChangeCPU,handleChangeRam,handleChangeHdd,handleChangeTrafic } from "../../../redux/slice/softtech";

const Cardwd = ({ data, cardIndex, product, feature }) => {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const dispatch = useDispatch()
  const apiwindproduct = useSelector((state) => state.productWind.productsWind);
  const currentPanelWındId = useSelector((state) => state.productWind.currentPanelWındId);

  const featureWind = useSelector((state) => state.featureWind.featuresWind);
  const currentFeatureWindId = useSelector((state) => state.featureWind.currentFeatureWindId);
  console.log('selector',currentFeatureWindId)


  const cpuCount = useSelector((state) => state.softtech.cpuCount);
  const ramCount = useSelector((state) => state.softtech.ramCount);
  const hddCount = useSelector((state) => state.softtech.hddCount);
  const trafficCount = useSelector((state) => state.softtech.trafficCount);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/Windows/product/").then((res) => dispatch(handleProductWindChange(res.data)));
  },[]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/Windows/feature/")
      .then((res) => dispatch(handleFeaturesWindChange(res.data)));
  }, []);


  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/Software/")
      .then((res) => dispatch(handleSoftTechChange(res.data)));
  }, []);


  // const handleChangeCPU = (event, newValue) => {
  //   if (typeof newValue === "number") {
  //     dispatch(handleChangeCPU(res.data));
  //   }
  // };
  // const handleChangeRam = (event, newValue) => {
  //   if (typeof newValue === "number") {
  //     setRam(newValue);
  //   }
  // };
  // const handleChangeHdd = (event, newValue) => {
  //   if (typeof newValue === "number") {
  //     setHdd(newValue);
  //   }
  // };
  // const handleChangeTrafic = (event, newValue) => {
  //   if (typeof newValue === "number") {
  //     setTrafic(newValue);
  //   }
  // };
  return (
    <div>
      <div>
        {/* <p>{item.title}</p>
             <p>{item.name}</p>*/}
        <div className="container" >
          <Accordion defaultActiveKey="0" >
            <Accordion.Item eventKey="0" >
              <Accordion.Header>
                <div className="row">
                  <div className="col">
                    <img src="img/setting.png"></img>
                    <span >Kontrol Panelleri ve Yazılımlar</span>
                    <span style={{ paddingLeft: "290px" }}>Kapat</span>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  {apiwindproduct.length !== 0
                    ? apiwindproduct.map((data, index) => (
                      <div
                        className="container  m-1 controlPanel col-12"
                        style={{ width: "295px" }}
                      >
                        <span className="row p-2">{data.name}</span>
                        <div className="row">
                          <span
                            className="col"
                            style={{ textAlign: "start" }}
                          >
                            {" "}
                            <b style={{ color: "#33CB48" }}>
                              + {data.price.toFixed(2)}$
                            </b>
                            / Aylık
                          </span>
                          <Switchi
                            value={data.id}
                            disabled={!!currentPanelWındId ? parseInt(currentPanelWındId) !== data.id : false}
                            inputProps={{ "aria-label": "Switch A" }}
                            color="primary"
                            onChange={(e) => dispatch(handleControlPanelWindSelect(e.target.value))}
                            {...label}
                            size="small"
                          />
                        </div>
                      </div>
                    ))
                    : ""}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <hr className="mt-5 mb-4 bg-secondary" />
          
          <div className="row p-2 ">
            <div className="col" style={{ textAlign: "end" }}>
              <Box sx={{ width: 250 }}>
                <Typography id="non-linear-slider" gutterBottom>
                  <div>
                    <span style={{ float: "left", fontSize: "25px"}}>
                      <img src="img/cpu.png"></img> CPU:
                    </span>
                    <span style={{ fontSize: "25px" }}>
                      {(cpuCount *4) + " CPU"}
                    </span>
                  </div>
                </Typography>
                <Slider style={{color:"gray"}}
                  color="info"
                  value={cpuCount}
                  min={0}
                  step={1}
                  max={4}
                  scale={() => cpuCount}
                  getAriaValueText={() => "CPU"}
                  valueLabelFormat={() => cpuCount + " CPU"}
                  onChange={(e,newValue) =>  dispatch(handleChangeCPU(newValue))}
                  aria-labelledby="non-linear-slider"
                />
              </Box>
            </div>
            <div
              className="col"
              style={{ textAlign: "end", paddingLeft: "103px" }}
            >
              <Box sx={{ width: 250 }}>
                <Typography id="non-linear-slider" gutterBottom>
                  <div>
                    <span style={{ float: "left", fontSize: "25px" }}>
                      <img src="img/ram.png"></img> RAM:
                    </span>
                    <span style={{ fontSize: "25px" }}>
                      {ramCount +' GB'}
                    </span>
                  </div>
                </Typography>
                <Slider style={{color:"gray"}}
                  value={ramCount}
                  min={0}
                  step={1}
                  max={5}
                  scale={calculateRam}
                  getAriaValueText={() => "GB"}
                  valueLabelFormat={() => ramCount + " GB"}
                  onChange={(e,newValue) =>  dispatch(handleChangeRam(newValue))}
                  valueLabelDisplay="auto"
                  aria-labelledby="non-linear-slider"
                />
              </Box>
            </div>
          </div>
          <div className="row p-2">
            <div className="col" style={{ textAlign: "end" }}>
              <Box sx={{ width: 250 }}>
                <Typography id="non-linear-slider" gutterBottom>
                  <div>
                    <span style={{ float: "left", fontSize: "25px" }}>
                      <img src="img/hdd.png"></img> HDD:
                    </span>
                    <span style={{ fontSize: "25px" }}>
                      {(hddCount*100) + ' GB'}
                    </span>
                  </div>
                </Typography>
                <Slider style={{color:"gray"}}
                  color="info"
                  value={hddCount}
                  min={0}
                  step={1}
                  max={10}
                  scale={() => hddCount}
                  getAriaValueText={() => "GB"}
                  valueLabelFormat={() => hddCount + " GB"}
                  onChange={(e,newValue) =>  dispatch(handleChangeHdd(newValue))}
                  valueLabelDisplay="auto"
                  aria-labelledby="non-linear-slider"
                />
              </Box>
            </div>
            <div
              className="col"
              style={{ textAlign: "end", paddingLeft: "103px" }}
            >
              <Box sx={{ width: 250 }}>
                <Typography id="non-linear-slider" gutterBottom>
                  <div>
                    <span style={{ float: "left", fontSize: "25px" }}>
                      <img src="img/trafik.png"></img> Trafik:
                    </span>
                    <span style={{ fontSize: "25px" }}>
                      {(trafficCount) + " TB"}
                    </span>
                  </div>
                </Typography>
                <Slider style={{color:"gray"}}
                  color="info"
                  value={trafficCount}
                  min={0}
                  step={10}
                  max={40}
                  scale={() => trafficCount}
                  getAriaValueText={() => "TB"}
                  valueLabelFormat={() => trafficCount + " TB"}
                  onChange={(e,newValue) =>  dispatch(handleChangeTrafic(newValue))}
                  valueLabelDisplay="auto"
                  aria-labelledby="non-linear-slider"
                />
              </Box>
            </div>
          </div>
         
        </div>
        <div className="container" style={{ paddingTop: "20px" }}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header onClick={console.log("asd")}>
                <div className="row">
                  <div className="col">
                    <img src="img/setting.png"></img>
                    <span>Ekstra Özellikler</span>
                    <span style={{ paddingLeft: "386px" }}>Kapat</span>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  {featureWind.length !== 0
                    ? featureWind.map((data, index) => (
                      <div
                        className="container  m-1 controlPanel col-12"
                        style={{ width: "295px" }}
                      >
                        <span className="row p-2">{data.name}</span>
                        <div className="row">
                          <span
                            className="col"
                            style={{ textAlign: "start" }}
                          >
                            {" "}
                            <b style={{ color: "#33CB48" }}>
                              + {data.price.toFixed(2)}$
                            </b>
                            / Aylık
                          </span>
                          <Switchi
                            value={data.id}
                            // disabled={!!currentFeatureId ? parseInt(currentFeatureId) !== data.id : false}
                            inputProps={{ "aria-label": "Switch A" }}
                            color="primary"
                            onChange={(e) => dispatch(handleFeaturesWindSelect(e.target.value))}
                            {...label}
                            size="small"
                          />
                        </div>
                      </div>
                    ))
                    : ""}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Cardwd;
