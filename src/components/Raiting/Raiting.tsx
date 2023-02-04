import React, {useState} from "react";

export type RaitingValue = 0 | 1 | 2 | 3 | 4 | 5;

type RaitingProps = {
    value: RaitingValue
    onClick: (value: RaitingValue) => void
}

export function Raiting(props: RaitingProps) {

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1} />
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )


}

type StarProps = {
    selected: boolean
    onClick: (value: RaitingValue) => void
    value: RaitingValue
}

function Star(props: StarProps) {
    return <span onClick={() => {props.onClick(props.value)}}>
        {props.selected ? <b>star </b> : "star "}
    </span>
}