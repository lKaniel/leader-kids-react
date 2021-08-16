import React, {useCallback, useEffect, useState} from 'react';
import classes from './Slider.module.scss'
import {Swipeable} from "react-touch";

const Slider = ({children}) => {

    const [state, setState] = useState({
        selected: 0,
        children: children
    })

    const swipeFor = useCallback((amount) => {
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
        },[])

    useEffect(() => {
        // setInterval(() => {
        //     swipeFor(1)
        // }, 3000)
    }, [swipeFor]);

    let length = children.length;

    return (
        <div className={classes.SliderWrap}>
            <Swipeable onSwipeLeft={()=>{swipeFor(1)}} onSwipeRight={()=>{swipeFor(-1)}}>
                <div className={classes.Slider} style={{
                    width: length * 100 + "%",
                    transform: `translate3d(${-100 / length * (state.selected)}%,0,0)`
                }}>
                    {children}
                </div>
            </Swipeable>
            <div className={classes.Buttons}>

            </div>
        </div>
    );
};

export default Slider;