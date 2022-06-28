import React from 'react'
import "../Home/Homepage.css";
import "./Buypage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import Switchi from "@material-ui/core/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link, Switch, Route, Routes } from "react-router-dom";
import { useSelector} from 'react-redux'
import emailjs from "emailjs-com";


function Buypage() {

 // #region MailService
 function sendEmail(e) {
  e.preventDefault();
  emailjs
    .sendForm("service_lxyigwe", "template_u5neqtd", e.target, "PhVC4yrDU_BL1GZyR")
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}
  //#endregion
 
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
    const toptotal=(total + softtechTotal + featureTotalResult+featurewindTotalResult);

    //#endregion
    //#region Component
  return (
   <div className="row">
    {/*fatura Başlangıç*/}
    <div className="vds-property-right p-5 col" style={{ backgroundColor: "#FAFAFA" }}>
      <p style={{ paddingTop: "15px" }}>Toplam Tutar</p>
      <h1 className='price' style={{ color: "#33CB48" }}>{toptotal}$</h1>
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
            <span>{cpuCount*4} CPUx2.0 GHZ</span>
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
            <span>{ramCount*2} GB</span>
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
    {/*fatura bitiş*/}
    {/* form başlangıç */}

    <div className="col">
    <div>
      <p className='p-5'><b>Lütfen Ödeme Yapmak İçin Formu Doludurunuz</b></p>
        <div className="container">
          <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name Surname"
                  name="name"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  required
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  readOnly
                  required
                  type="text"
                  className="form-control"
                  placeholder="Price"
                  name="subject"
                  value={toptotal +" $"}
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                readOnly
                  required
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                  name="message"
                  value={((!!selectedProduct? "Linux Kontrol Panel "+selectedProduct.name:" " )
                  +(!!selectedProduct? selectedProduct.price+"$\n":""))
                  +((!!cpu? "" +cpu.name:" " )
                  +(!!cpu? (cpuCount * cpu.price)  +"$\n":""))
                  +((!!ram? "" +ram.name:"  " )
                  +(!!ram? (ramCount * ram.price)  +"$\n":""))
                  +((!!hdd? "" +hdd.name:"  " )
                  +(!!hdd? (hddCount * hdd.price)  +"$\n":""))
                  +((!!traffic? "" +traffic.name:"  " )
                  +(!!traffic? (trafficCount * traffic.price)  +"$\n":""))
                  +((!!selectedWindFeatures?"Windows Kontrol Panel "+ selectedWindFeatures.name:" " )
                  +(!!selectedWindFeatures? selectedWindFeatures.price+"$\n":""))}
                ></textarea>
              </div>
              <div className=" col-8 pt-3 mx-auto">
                <input
                  required
                  type="submit"
                  className="btn"
                  style={{"backgroundColor":"#4CD05F","color":"white"}}
                  value="Siparişi Tamamla"
                ></input>
              </div>
            </div>
          </form>
        </div>
        </div>
    </div>
    {/* form bitiş */}
   </div>
  );
 //#endregion 
}

export default Buypage;
