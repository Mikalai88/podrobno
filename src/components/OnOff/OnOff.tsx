import React, {useState} from 'react';

type PropsType = {
    on: boolean
    onChangeOn: (on: boolean) => void
}

export const OnOff = (props: PropsType) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    };

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        backgroundColor: props.on ? "white" : "red"
    };

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "red" : "green"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {props.onChangeOn(true)}}>On</div>
            <div style={offStyle} onClick={() => {props.onChangeOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

