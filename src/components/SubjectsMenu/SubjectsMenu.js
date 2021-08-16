import React, {useCallback, useState} from 'react';
import mariaA from '../../img/mariaAl.jpg';
import yoriy from '../../img/yriy.jpg';
import olgN from '../../img/ON.jpg'
import math from '../../img/math.svg'
import handmade from '../../img/handmade.svg'
import science from '../../img/science.svg'
import classes from './SubjectsMenu.module.scss';
import StringFormatter from "../StringFormatter/StringFormatter";
import {Draggable} from "react-touch";
import Slider from "../Slider/Slider";

const SubjectsMenu = () => {

    const [state, setState] = useState({
        active: 0,
        activeTeacher: 0,
        strings: [
            {
                title: "Математика",
                text: "Розумовий розвиток дітей засобами логіки, цікавої та олімпіадної математики;\n\n" +
                    "Авторські програми, розроблені вчителями, які викладають у класах з поглибленим вивченням математики, готують дітей до участі у олімпіадах, є постійними учасниками журі математичних олімпіад різних рівнів\n\n" +
                    "Поєднання нестандартних та ігрових форм навчання \n\n" +
                    "Кваліфіковані вчителі із значним досвідом роботи",
                teachers: [
                    {
                        name: "Макодзеба Марія Олександрівна",
                        bio: "вчитель математики Києво-Печерського ліцею № 171 «Лідер», І категорія, Президентка ГО «Асоціація гайдів України»",
                        img: mariaA
                    },
                    {
                        name: "Андреєв Юрій Сергійович",
                        bio: "вчитель 7 та 11 математичних класів Києво-Печерського ліцею № 171 «Лідер», вища категорія",
                        img: yoriy
                    },
                    {
                        name: "Марценюк Ольга Миколаївна ",
                        bio: "вчитель математики Києво-Печерського ліцею № 171 «Лідер», вища категорія, педагогічне звання «старший вчитель»",
                        img: olgN
                    }
                ]
            },
            {
                title: "Handmade",
                text: "Інтелектуальний розвиток дитини засобами дрібної моторики рук\n\n" +
                    "Розвиток творчих здібностей та почуття прекрасного\n\n" +
                    "Різноманітні артзаняття з малювання, ліпки, паперопластики, витинання",
                teachers: [
                    {
                        name: "Макодзеба Марія Олександрівна",
                        bio: "вчитель математики Києво-Печерського ліцею № 171 «Лідер», І категорія, Президентка ГО «Асоціація гайдів України»",
                        img: mariaA
                    },
                    {
                        name: "Андреєв Юрій Сергійович",
                        bio: "вчитель 7 та 11 математичних класів Києво-Печерського ліцею № 171 «Лідер», вища категорія",
                        img: yoriy
                    },
                    {
                        name: "Марценюк Ольга Миколаївна ",
                        bio: "вчитель математики Києво-Печерського ліцею № 171 «Лідер», вища категорія, педагогічне звання «старший вчитель»",
                        img: olgN
                    },
                    {
                        name: "Марценюк Ольга Миколаївна ",
                        bio: "вчитель математики Києво-Печерського ліцею № 171 «Лідер», вища категорія, педагогічне звання «старший вчитель»",
                        img: olgN
                    }
                ]
            },
            {
                title: "Science",
                text: "Інтелектуальний та всебічний розвиток дітей, розширення загального кругозору\n\n" +
                    "Основи фізики, хімії, біології, географії\n\n" +
                    "Веселі практичні заняття, експерименти, дослідження",
                teachers: [
                    {
                        name: "Макодзеба Марія Олександрівна",
                        bio: "вчитель математики Києво-Печерського ліцею № 171 «Лідер», І категорія, Президентка ГО «Асоціація гайдів України»",
                        img: mariaA
                    },
                    {
                        name: "Андреєв Юрій Сергійович",
                        bio: "вчитель 7 та 11 математичних класів Києво-Печерського ліцею № 171 «Лідер», вища категорія",
                        img: yoriy
                    },
                    {
                        name: "Марценюк Ольга Миколаївна ",
                        bio: "вчитель математики Києво-Печерського ліцею № 171 «Лідер», вища категорія, педагогічне звання «старший вчитель»",
                        img: olgN
                    }
                ]
            },
        ]
    })


    let changeActive = useCallback((active) => {
        setState(prev => {
            return {
                ...prev,
                active,
                activeTeacher: 0
            }
        })
    }, [])

    let changeTeacher = useCallback((teacher) => {
        setState(prev => {
            return {
                ...prev,
                activeTeacher: teacher
            }
        })
    }, [])


    let listOfTeachers = state.strings[state.active].teachers.map((teacher, index) => {
        return (
            <img className={classes.TeacherButton} key={index} onClick={() => {
                changeTeacher(index)
            }}
                 src={teacher.img}
            />
        )
    })

    let listOfBigTeachers = state.strings[state.active].teachers.map((teacher, index) => {
        return (
            <div className={classes.Teachers}>
                <div className={classes.TeacherWrap}>
                    <div className={classes.TeacherInfo}>
                        <img className={classes.Photo} src={teacher.img}/>
                        <div className={classes.Name}>
                            {teacher.name}
                        </div>
                        <div className={classes.Bio}>
                            {teacher.bio}
                        </div>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div className={classes.SubjectsMenu}>
            <div className={classes.Buttons}>
                <button
                    className={classes.Button + " " + (state.active === 0 ? classes.active : null)}
                    onClick={() => {
                        changeActive(0)
                    }}
                >
                    <img src={math}/>
                </button>
                <button className={classes.Button + " " + (state.active === 1 ? classes.active : null)}
                        style={{margin: "0 10px"}}
                        onClick={() => {
                            changeActive(1)
                        }}
                >
                    <img src={handmade}/>
                </button>
                <button className={classes.Button + " " + (state.active === 2 ? classes.active : null)}
                        onClick={() => {
                            changeActive(2)
                        }}
                >
                    <img src={science}/>
                </button>
            </div>
            <div className={classes.Info}>
                <div className={classes.Title}>
                    {state.strings[state.active].title}
                </div>
                <div className={classes.Text}>
                    <StringFormatter text={state.strings[state.active].text}/>
                </div>
            </div>
            {window.innerWidth < 700 ?
                <div className={classes.Teachers}>
                    <div className={classes.TeacherWrap}>
                        <div className={classes.TeacherInfo}>
                            <img className={classes.Photo}
                                 src={state.strings[state.active].teachers[state.activeTeacher].img}/>
                            <div className={classes.Name}>
                                {state.strings[state.active].teachers[state.activeTeacher].name}
                            </div>
                            <div className={classes.Bio}>
                                {state.strings[state.active].teachers[state.activeTeacher].bio}
                            </div>
                        </div>
                    </div>
                    {/*<Draggable style={{translateX: 0, translateY: 0}}>*/}
                    {/*    {({translateX}) => {*/}
                    {/*        return (*/}
                    <div
                        className={classes.TeachersList}
                        // style={{transform: `translate3d(${translateX}px, 0px, 0)`}}
                    >
                        {listOfTeachers}
                    </div>
                    {/*    );*/}
                    {/*}}*/}
                    {/*</Draggable>*/}
                </div>
                : null}
            {window.innerWidth >= 700 ?
                <Slider>
                    {listOfBigTeachers}
                </Slider>
                : null}
        </div>
    )
        ;
};

export default SubjectsMenu;