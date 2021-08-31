import React, {useCallback, useEffect, useState} from 'react';
import classes from './Slider.module.scss'
import {Swipeable} from "react-touch";

const Slider = ({children}) => {

    const [state, setState] = useState({
        selected: 0,
        children: children,
        interval: setInterval(()=>{
            // swipeFor(1)
        },5000)
    })

    const swipeFor = useCallback((amount) => {
        if (state.children.length < 2) return
        if (window.innerWidth < 1000) {
            setState((prev) => {
                let selected = prev.selected + amount
                if (selected >= prev.children.length) {
                    selected = 0
                } else if (selected < 0) {
                    selected = prev.children.length - 1
                }
                return {
                    ...prev,
                    selected
                }
            })
        } else {
            setState((prev) => {
                let selected = prev.selected + amount
                if (selected >= prev.children.length - 1) {
                    selected = 0
                } else if (selected < 0) {
                    selected = prev.children.length - 2
                }
                return {
                    ...prev,
                    selected
                }
            })
        }
    }, [state.children.length])

    useEffect(()=>{
        setState((prev)=>{
            clearInterval(prev.interval);
            return{
                ...prev,
                children: children,
                selected: 0,
                interval: setInterval(()=>{
                    swipeFor(1)
                },5000)
            }
        })
    },[children])

    useEffect(() => {
        // setInterval(() => {
        //     swipeFor(1)
        // }, 3000)
    }, [swipeFor]);

    let length = children.length;
    let coef = 100
    if (window.innerWidth > 1000) {
        coef /= 2
    }

    let buttons = children.map((element, index) => {
        if (window.innerWidth > 1000 && length - 1 === index) {
            return null
        }
        return(<div className={state.selected === index ? classes.Button + " " + classes.selected : classes.Button + " " + ""}/>)
    })

    return (
        <div className={classes.SliderWrap}>
            <Swipeable onSwipeLeft={() => {
                swipeFor(1)
            }} onSwipeRight={() => {
                swipeFor(-1)
            }}>
                <div className={classes.Slider} style={{
                    width: length * coef + "%",
                    transform: `translate3d(${-100 / length * (state.selected)}%,0,0)`
                }}>
                    {children}
                </div>
            </Swipeable>

            <div className={classes.Buttons}>
                {buttons}
            </div>
        </div>
    );
};

export default Slider;