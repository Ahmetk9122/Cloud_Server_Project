import React, {useState} from 'react'
import Card from './Cards/Card';
import Cardtwo from './Cards/Cardtwo';
import Data from '../Data/Data.js';
const lists = [
    { id: 1, title: "Centos 7" ,page:"FirstCard"},
    { id: 2, title: "Ubuntu 18.04",page:"SecondCard"},
    { id: 3, title: "Ubuntu 20.04",page:"ThridCard"}
  ];
const Linux = () => {
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
                    <div>
                        {lists.map((list) => (
                            <div key={list.id} className="col cat" style={{backgroundColor: list.id === selected ? "#FEF8E7" : "","cursor":"pointer"}} onClick={()=>{setActice(list.page);handleColor(list)}}>
                                <span>{list.title}</span>
                            </div>
                        ))}
                   </div>
                </div>
                {active === "FirstCard" &&  <Card data={Data} cardIndex={0}/>}
                {active === "SecondCard" &&  <Cardtwo data={Data} cardIndex={1}/>}
                {active === "ThridCard" &&  <Cardtwo data={Data} cardIndex={2}/>}
    </div>
  )
}

export default Linux