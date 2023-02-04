import React, {useState} from "react";

type ItemType = {
    title: string
    value: any
}

export type MenuProps = {
    title: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
}

function Menu(props: MenuProps) {



    return (<div>
            <MenuTitle title={props.title} onChange={() => {props.onChange()}}/>
            {!props.collapsed && <MenuBody items={props.items} />}
        </div>)
}

type MenuTitleProps = {
    title: string
    onChange: () => void
}

function MenuTitle(props: MenuTitleProps) {
    return (<div>
            <h3 onClick={() => { props.onChange()}}>{props.title}</h3>
        </div>)
}

type MenuBodyProps = { items: ItemType[] }

function MenuBody(props: MenuBodyProps) {
    return (<div>
            <ul>
                {props.items.map((i, index) => <li key={index}>{i.title}</li>)}
            </ul>
        </div>)
}

export default Menu;