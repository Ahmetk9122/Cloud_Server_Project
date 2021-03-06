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
import { handleControlPanelSelect, handleProductChange } from "../../../redux/slice/product";
import { handleFeaturesSelect, handleFeaturesChange } from "../../../redux/slice/feature";
import { handleSoftTechChange,handleChangeCPU,handleChangeRam,handleChangeHdd,handleChangeTrafic } from "../../../redux/slice/softtech";

const Card = ({ data, cardIndex, product, feature }) => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  // const [cpu, setCpu] = useState(0);
  // const [ram, setRam] = useState(0);
  // const [hdd, setHdd] = useState(0);
  // const [trafic, setTrafic] = useState(0);
  // const [api, setApi] = useState("");
  //const [featurel, setFeaturel] = useState("");
  const dispatch = useDispatch()
  const api = useSelector((state) => state.product.products);
  const currentPanelId = useSelector((state) => state.product.currentPanelId);


  const featurel = useSelector((state) => state.feature.features);
  const currentFeatureId = useSelector((state) => state.feature.currentFeatureId);
  console.log('selector',currentFeatureId)

  const cpuCount = useSelector((state) => state.softtech.cpuCount);
  const ramCount = useSelector((state) => state.softtech.ramCount);
  const hddCount = useSelector((state) => state.softtech.hddCount);
  const trafficCount = useSelector((state) => state.softtech.trafficCount);


  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/Linux/product/")
      .then((res) => dispatch(handleProductChange(res.data)));
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/Linux/feature/")
      .then((res) => dispatch(handleFeaturesChange(res.data)));
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
                    <span >Kontrol Panelleri ve Yaz??l??mlar</span>
                    <span style={{ paddingLeft: "290px" }}>Kapat</span>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  {api.length !== 0
                    ? api.map((data, index) => (
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
                            / Ayl??k
                          </span>
                          <Switchi
                            value={data.id}
                            disabled={!!currentPanelId ? parseInt(currentPanelId) !== data.id : false}
                            inputProps={{ "aria-label": "Switch A" }}
                            color="primary"
                            onChange={(e) => dispatch(handleControlPanelSelect(e.target.value))}
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
                      {((ramCount *2)) +' GB'}
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
                    <span>Ekstra ??zellikler</span>
                    <span style={{ paddingLeft: "386px" }}>Kapat</span>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  {featurel.length !== 0
                    ? featurel.map((data, index) => (
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
                            / Ayl??k
                          </span>
                          <Switchi
                            value={data.id}
                            // disabled={!!currentFeatureId ? parseInt(currentFeatureId) !== data.id : false}
                            inputProps={{ "aria-label": "Switch A" }}
                            color="primary"
                            onChange={(e) => dispatch(handleFeaturesSelect(e.target.value))}
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

export default Card;
