import React from 'react'
import "../Home/Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import BootstrapSwitchButton from "bootstrap-switch-button-react";
import Switchi from "@material-ui/core/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link, Switch, Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux'

function Detail() {

  //#region Veriler
  const productList = useSelector((state) => state.product.products);
  const currentPanelId = useSelector((state) => state.product.currentPanelId);
  const selectedProduct = productList.find((e) => e.id === parseInt(currentPanelId));
  const featureList = useSelector((state) => state.feature.features);
  const currentFeaturesId = useSelector((state) => state.feature.currentFeatureId);
  const productWindList = useSelector((state) => state.productWind.productsWind);
  const currentPanelWındId = useSelector((state) => state.productWind.currentPanelWındId);
  const selectedWindProduct = productList.find((e) => e.id === parseInt(currentPanelWındId));
  const featureWindList = useSelector((state) => state.featureWind.featuresWind);
  const currentFeatureWindId = useSelector((state) => state.featureWind.currentFeatureWindId);
  const selectedWindFeatures = featureWindList.find((e) => e.id === parseInt(currentFeatureWindId));
  const totalproduct = (!!selectedProduct ? selectedProduct?.price + 7 : 7)
  const totalWindProduct = (!!selectedWindProduct ? selectedWindProduct?.price + 0 : 0)
  const totalWindFeatures = (!!selectedWindFeatures ? selectedWindFeatures?.price + 0 : 0)
  const total = (totalproduct + totalWindProduct + totalWindFeatures)
  const cpuCount = useSelector((state) => state.softtech.cpuCount);
  const ramCount = useSelector((state) => state.softtech.ramCount);
  const hddCount = useSelector((state) => state.softtech.hddCount);
  const trafficCount = useSelector((state) => state.softtech.trafficCount);
  const softTechList = useSelector((state) => state.softtech.softTechList);
  const cpu = softTechList.find((e) => e.name === "CPU");
  const ram = softTechList.find((e) => e.name === "RAM");
  const hdd = softTechList.find((e) => e.name === "HDD");
  const traffic = softTechList.find((e) => e.name === "Traffic");
  const softtechTotal = (cpuCount * cpu?.price) + (ramCount * ram?.price) + (hddCount * hdd?.price) + (trafficCount * traffic?.price)
  let featureTotal = currentFeaturesId.map((element) => {
    const selectedFeatures = featureList.find((e) => e.id === parseInt(element))
    return selectedFeatures.price
  })
  const featureTotalResult =  featureTotal.reduce((a , b) => a + b , 0 )
  let featureWindTotal = currentFeatureWindId.map((element) => {
    const selectedWindFeatures = featureWindList.find((e) => e.id === parseInt(element))
    return selectedWindFeatures.price
  })
  const featurewindTotalResult =  featureWindTotal.reduce((a , b) => a + b , 0 )
  //#endregion
  

 //#region component
  return (
    <div className="vds-property-right" style={{ backgroundColor: "#FAFAFA" }}>
      <p style={{ paddingTop: "15px" }}>Toplam Tutar</p>
      <h1 className='price' style={{ color: "#33CB48" }}>{total + softtechTotal + featureTotalResult+featurewindTotalResult}$</h1>
      {<div style={{ textAlign: "center" }}>
        <Stack
          direction="col"
          spacing={1}
          alignItems="center"
          style={{ paddingLeft: "190px" }}
        >
          <Typography style={{ color: "gray" }}>Aylık</Typography>
          <Switchi
            color='primary'
            inputProps={{ "aria-label": "ant design" }}
          />
          <Typography style={{ color: "gray" }}>Yıllık</Typography>
        </Stack>
      </div>}
      <div style={{ paddingBottom: "15px" }}>
        <Link to="/buy">
          <button
            className="btn "
            style={{
              backgroundColor: "#33CB48",
              color: "white",
              width: "175px",
            }}
          >
            Sepete at
          </button>
        </Link>
      </div>
      <hr style={{ backgroundColor: "gray" }} />
      <p>
        <b>Özellikler</b>
      </p>
    
      {!!selectedProduct && <div className="Sell">
        <div>
          <p style={{ color: "gray", "text-align": "start" }}>Kontrol Panel</p>
        </div>
        <div className="row" style={{ paddingBottom: "-15px" }}>
          <div className="col" style={{ "text-align": "start" }}>
            <span>{selectedProduct.name}</span>
          </div>
          <div className="col buy" style={{ "text-align": "end" }}>
            <span>{selectedProduct.price} $</span>
          </div>
        </div>
        <hr style={{ backgroundColor: "gray" }} />
      </div>}


      {!!currentFeaturesId && currentFeaturesId.map((element) => {
        const selectedFeatures = featureList.find((e) => e.id === parseInt(element))
        return (
          <>
            <div className="Sell">
              <div>
                <p style={{ color: "gray", "text-align": "start" }}>Ekstra Özellikler</p>
              </div>
              <div className="row" style={{ paddingBottom: "-15px" }}>
                <div className="col" style={{ "text-align": "start" }}>
                  <span>{selectedFeatures.name}</span>
                </div>
                <div className="col buy" style={{ "text-align": "end" }}>
                  <span>{selectedFeatures.price} $</span>
                </div>
              </div>
              <hr style={{ backgroundColor: "gray" }} />
            </div>
          </>
        )
      })}


      {!!selectedWindProduct && <div className="Sell">
        <div>
          <p style={{ color: "gray", "text-align": "start" }}>Kontrol Panel</p>
        </div>
        <div className="row" style={{ paddingBottom: "-15px" }}>
          <div className="col" style={{ "text-align": "start" }}>
            <span>{selectedWindProduct.name}</span>
          </div>
          <div className="col buy" style={{ "text-align": "end" }}>
            <span>{selectedWindProduct.price} $</span>
          </div>
        </div>
        <hr style={{ backgroundColor: "gray" }} />
      </div>}


      {!!selectedWindFeatures && currentFeatureWindId.map((element) => {
        const selectedWindFeatures = featureWindList.find((e) => e.id === parseInt(element))
        return (
          <>
            <div className="Sell">
              <div>
                <p style={{ color: "gray", "text-align": "start" }}>Ekstra Özellikler</p>
              </div>
              <div className="row" style={{ paddingBottom: "-15px" }}>
                <div className="col" style={{ "text-align": "start" }}>
                  <span>{selectedWindFeatures.name}</span>
                </div>
                <div className="col buy" style={{ "text-align": "end" }}>
                  <span>{selectedWindFeatures.price} $</span>
                </div>
              </div>
              <hr style={{ backgroundColor: "gray" }} />
            </div>
          </>
        )
      })}


      <div className="Sell">
        <div>
          {" "}
          <p style={{ color: "gray", "text-align": "start" }}>CPU</p>
        </div>
        <div className="row" style={{ paddingBottom: "-15px" }}>
          <div className="col" style={{ "text-align": "start" }}>
            <span>{cpuCount *4} CPUx2.0 GHZ</span>
          </div>
          <div className="col buy" style={{ "text-align": "end" }}>
            <span>{cpuCount * cpu?.price}$</span>
          </div>
        </div>
        <hr style={{ backgroundColor: "gray" }} />
      </div>
      <div className="Sell">
        <div>
          {" "}
          <p style={{ color: "gray", "text-align": "start" }}>RAM</p>
        </div>
        <div className="row" style={{ paddingBottom: "-15px" }}>
          <div className="col" style={{ "text-align": "start" }}>
            <span>{ramCount *2} GB</span>
          </div>
          <div className="col buy" style={{ "text-align": "end" }}>
            <span>{ramCount * ram?.price}$</span>
          </div>
        </div>
        <hr style={{ backgroundColor: "gray" }} />
      </div>
      <div className="Sell">
        <div>
          {" "}
          <p style={{ color: "gray", "text-align": "start" }}>HDD</p>
        </div>
        <div className="row" style={{ paddingBottom: "-15px" }}>
          <div className="col" style={{ "text-align": "start" }}>
            <span>{hddCount*100} GB</span>
          </div>
          <div className="col buy" style={{ "text-align": "end" }}>
            <span>{hddCount * hdd?.price}$</span>
          </div>
        </div>
        <hr style={{ backgroundColor: "gray" }} />
      </div>
      <div className="Sell">
        <div>
          {" "}
          <p style={{ color: "gray", "text-align": "start" }}>Traffic</p>
        </div>
        <div className="row" style={{ paddingBottom: "-15px" }}>
          <div className="col" style={{ "text-align": "start" }}>
            <span>{trafficCount} TB</span>
          </div>
          <div className="col buy" style={{ "text-align": "end" }}>
            <span>{trafficCount * traffic?.price}$</span>
          </div>
        </div>
        <hr style={{ backgroundColor: "gray" }} />
      </div>
    </div>
  )
  //#endregion
}

export default Detail