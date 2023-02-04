import React, {useReducer, useState} from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import {Raiting, RaitingValue} from "./components/Raiting/Raiting";
import {OnOff} from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";
import {reducer} from "./components/Menu/reducer";



function App() {
    let [value, setValue] = useState<RaitingValue>(3);
    let [on, setOn] = useState<boolean>(true);
    // let [collapsed, setCollapsed] = useState<boolean>(true);
    let [cityValue, setCityValue] = useState("2");
    let [stateCollapsed, dispatch] = useReducer(reducer, {collapsed: false});

    return (
        <div className="app-wrapper">
            <OnOff on={on} onChangeOn={(on) => {
                setOn(on)
            }}/>
            <Menu title={"Menu"}
                  items={[{title: "Dimych", value: 1},
                      {title: "Valera", value: 1},
                      {title: "Alex", value: 1},
                      {title: "Oleg", value: 1},
                      {title: "Egor", value: 1}]}
                  collapsed={stateCollapsed.collapsed}
                // onChange={() => setCollapsed(!collapsed)}
                  onChange={() => {
                      dispatch({type: "TOGGLE-COLLAPSED"})
                  }}
            />
            <Menu title={"Users"}
                  items={[{title: "Dimych", value: 1},
                      {title: "Valera", value: 1},
                      {title: "Alex", value: 1},
                      {title: "Oleg", value: 1},
                      {title: "Egor", value: 1}]}
                  collapsed={stateCollapsed.collapsed}
                // onChange={() => setCollapsed(!collapsed)}
                  onChange={() => {
                      dispatch({type: "TOGGLE-COLLAPSED"})
                  }}
            />

            <Raiting value={value} onClick={setValue}/>
            <Select cityValue={cityValue} onChange={setCityValue} items={
                [
                    {title: "Minsk", cityValue: 1},
                    {title: "Moscow", cityValue: 2},
                    {title: "Kiew", cityValue: 3}
                ]
            }/>
        </div>
    )
        ;
}

export default App;
