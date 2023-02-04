import React, {useState, KeyboardEvent, useEffect} from 'react';
import classes from "./Select.module.css";

type SelectPropsType = {
    cityValue?: any
    onChange: (cityValue: any) => void
    items: ItemType[]
}

type ItemType = {
    title: string
    cityValue: any
}

export const Select: React.FC<SelectPropsType> = (props) => {
    let [active, setActive] = useState(false);
    let [hoveredValue, setHoveredValue] = useState(props.cityValue);
    const selected = props.items.find(i => i.cityValue === props.cityValue)
    const hovered = props.items.find(i => i.cityValue === hoveredValue)

    useEffect(() => {
        setHoveredValue(props.cityValue);
    }, [props.cityValue])
    const toggleItem = () => setActive(!active);
    const onItemClick = (cityValue: any) => {
        props.onChange(cityValue);
        toggleItem()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === "ArrowDown" || e.key === "ArrowUp") {
            for(let i=0; i<props.items.length; i++) {
                if(props.items[i].cityValue === hoveredValue) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i+1]
                        : props.items[i-1]

                    if(pretendentElement) {
                        props.onChange(pretendentElement.cityValue);
                        return;
                    }
                }
            }
            if(!selected) {
                props.onChange(props.items[0].cityValue)
            }

        }

        if(e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    return (
        <div className={classes.wrapper}>
            {/*<select>*/}
            {/*    {props.items.map((el) =><option value={el.value}>{el.title}</option>)}*/}
            {/*</select>*/}
            <div className={classes.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={classes.main} onClick={toggleItem}>{selected && selected.title}</span>
                {
                    active &&
                    <div className={classes.items}>
                        {props.items.map(el => <div
                            onMouseEnter={() => {setHoveredValue(el.cityValue)}}
                            className={classes.item + " " + (hovered === el
                                ? classes.selected
                                : "")}
                            key={el.cityValue}
                            onClick={() => {onItemClick(el.cityValue)}}
                        >{el.title}</div>)}
                    </div>
                }
            </div>
        </div>
    );
};
