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

function MenuSecret(props: MenuProps) {
    return (<div>
            <MenuTitle title={props.title} onChange={() => {props.onChange()}}/>
            {!props.collapsed && <MenuBody items={props.items} />}
        </div>)
}

const Menu = React.memo(MenuSecret);

type MenuTitleProps = {
    title: string
    onChange: () => void
}

function MenuTitleSecret(props: MenuTitleProps) {
    return (<div>
            <h3 onClick={() => { props.onChange()}}>{props.title}</h3>
        </div>)
}

const MenuTitle = React.memo(MenuTitleSecret);

type MenuBodyProps = { items: ItemType[] }

function MenuBodySecret(props: MenuBodyProps) {
    return (<div>
            <ul>
                {props.items.map((i, index) => <li key={index}>{i.title}</li>)}
            </ul>
        </div>)
}

const MenuBody = React.memo(MenuBodySecret);

export default Menu;