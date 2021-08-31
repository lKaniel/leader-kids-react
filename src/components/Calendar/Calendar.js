import React, {useCallback, useState} from 'react';
import classes from './Calendar.module.scss'
import math from "../../img/math.svg";
import science from "../../img/science.svg";
import handmade from "../../img/handmade.svg";
import PostsWrapper from "../PostsWrapper/PostsWrapper";

const Calendar = ({children}) => {
    const [state, setState] = useState({
        active: 0,
        list: [
            [
            {
                title: "Вівторок",
                info:
                    <>
                        <p>16:00 - 16:40 Математика</p>
                        <p>16:50 - 17:30 Handmade</p>
                    </>
            },{
                title: "Четвер",
                info:
                    <>
                        <p>16:00 - 16:40 Математика</p>
                        <p>16:50 - 17:30 Science</p>
                    </>
            }],
            [{
                title: "Вівторок",
                info:
                    <>
                        <p>16:00 - 16:40 Handmade </p>
                        <p>16:50 - 17:30 Математика</p>
                    </>
            },{
                title: "Четвер",
                info:
                    <>
                        <p>16:50 - 17:30 Science</p>
                        <p>16:00 - 16:40 Математика</p>
                    </>
            }],
            [{
                title: "Середа",
                info:
                    <>
                        <p>16:00 - 16:40 Математика</p>
                        <p>16:50 - 17:30 Handmade</p>
                    </>
            },{
                title: "П'ятниця",
                info:
                    <>
                        <p>16:50 - 17:30 Science</p>
                        <p>16:00 - 16:40 Математика</p>
                    </>
            }],
            [{
                title: "Середа",
                info:
                    <>
                        <p>16:50 - 17:30 Handmade</p>
                        <p>16:00 - 16:40 Математика</p>
                    </>
            },{
                title: "П'ятниця",
                info:
                    <>
                        <p>16:00 - 16:40 Математика</p>
                        <p>16:50 - 17:30 Science</p>
                    </>
            }]
        ]
    })

    let changeActive = useCallback((active) => {
        setState(prev => {
            return {
                ...prev,
                active
            }
        })
    }, [])

    let days = (state.list[state.active]).map((element, index)=>{
        return(
            <div className={classes.Day}>
                <div className={classes.Title}>
                    {element.title}
                </div>
                <div className={classes.Text}>
                    {element.info}
                </div>
            </div>
        )
    })


    return (
        <>
            <div className={classes.Buttons}>
                <button
                    className={classes.Button + " " + (state.active === 0 ? classes.active : null)}
                    onClick={() => {
                        changeActive(0)
                    }}
                >
                    1 класс
                </button>
                <button className={classes.Button + " " + (state.active === 1 ? classes.active : null)}
                        style={{margin: "0 10px", marginRight: "0px"}}
                        onClick={() => {
                            changeActive(1)
                        }}
                >
                    2 класс
                </button>
                <button className={classes.Button + " " + (state.active === 2 ? classes.active : null)}
                        style={{margin: "0 10px"}}
                        onClick={() => {
                            changeActive(2)
                        }}
                >
                    3 класс
                </button>
                <button className={classes.Button + " " + (state.active === 3 ? classes.active : null)}
                        onClick={() => {
                            changeActive(3)
                        }}
                >
                    4 класс
                </button>
            </div>
            <div className={classes.Alert}>
                Початок занятть з 7 вересня
            </div>
            <PostsWrapper>
                {days}
            </PostsWrapper>
        </>
    );
};

export default Calendar;