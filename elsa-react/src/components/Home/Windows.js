import React, {useState} from 'react'
import Cardwd from './Cards/Cardwd';
import Data from '../Data/Data.js';
const lists = [
    { id: 1, title: "Windows 2012" ,page:"FirstCard"},
    { id: 2, title: "Windows 2016",page:"SecondCard"},
    { id: 3, title: "Windows 2019",page:"ThridCard"}
  ];
function Windows() {
    const [active,setActice] =useState("FirstCard");
    const [selected, setSelected] = useState(0);
    const [state, setState] = useState({
      name: "bob",
      color: "white"
    });
    const handleColor = (row) => {
      setSelected(row.id);
    };
    return (
      <div>
                  <div
                      className="row"
                      style={{
                          paddingTop: "15px",
                          paddingBottom: "15px",
                          width: "690px",
                          paddingLeft: "17px",
                      }}
                      >
                        {/*
                    <div className="col cat" style={{ backgroundColor: "#E6F7FE","cursor":"pointer"}}  onClick={()=>setActice("FirstCard")}>
                        <span>Windows 2012</span>
                    </div>
                    <div className="col cat" style={{ backgroundColor: "#E6F7FE","cursor":"pointer"}}  onClick={()=>setActice("SecondCard")}>
                        <span >Windows 2016</span>
                    </div>
                    <div className="col cat" style={{ backgroundColor: "#E6F7FE","cursor":"pointer"}} onClick={()=>setActice("ThridCard")}>
                        <span>Windows 2019</span>
                    </div>
                        */ }
                       <div>
                        {lists.map((list) => (
                            <div key={list.id} className="col cat" style={{backgroundColor: list.id === selected ? "#E6F7FE" : "","cursor":"pointer"}} onClick={()=>{setActice(list.page);handleColor(list)}}>
                                <span>{list.title}</span>
                            </div>
                        ))}
                   </div>
                   
                  </div>
                  {active === "FirstCard" &&  <Cardwd data={Data} cardIndex={0}/>}
                  {active === "SecondCard" &&  <Cardwd data={Data} cardIndex={1}/>}
                  {active === "ThridCard" &&  <Cardwd data={Data} cardIndex={2}/>}
      </div>
    )
}

export default Windows