import React from 'react';
import Block from "../../components/Block/Block";
import Calendar from "../../components/Calendar/Calendar";
import MapWidget from "../../components/MapWidget/MapWidget";
import BlockText from "../../components/BlockText/BlockText";
import Botter from "../../components/Botter/Botter";

const CalendarPage = () => {
    return (
        <div>
            <Block title={"1 класс"}>
                <Calendar>
                    <iframe
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23039BE5&ctz=Europe%2FKiev&src=bm1lMHN1ZTI5Y2RpaTMxbnZmazhqaDdsZDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23B39DDB&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=WEEK"
                        style={{borderWidth: 0, BorderRadius: "20px"}} width={`${window.innerWidth - 60}`} height="600" frameBorder="0"
                        scrolling="no"/>
                </Calendar>
            </Block>

            <Block title={"2 класс"}>
                <Calendar>
                    <iframe
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23039BE5&ctz=Europe%2FKiev&src=bm1lMHN1ZTI5Y2RpaTMxbnZmazhqaDdsZDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23B39DDB&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=WEEK"
                        style={{borderWidth: 0, BorderRadius: "20px"}} width={`${window.innerWidth - 60}`} height="600" frameBorder="0"
                        scrolling="no"/>
                </Calendar>
            </Block>

            <Block title={"3 класс"}>
                <Calendar>
                    <iframe
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23039BE5&ctz=Europe%2FKiev&src=bm1lMHN1ZTI5Y2RpaTMxbnZmazhqaDdsZDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23B39DDB&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=WEEK"
                        style={{borderWidth: 0, BorderRadius: "20px"}} width={`${window.innerWidth - 60}`} height="600" frameBorder="0"
                        scrolling="no"/>
                </Calendar>
            </Block>

            <Block title={"4 класс"}>
                <Calendar>
                    <iframe
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23039BE5&ctz=Europe%2FKiev&src=bm1lMHN1ZTI5Y2RpaTMxbnZmazhqaDdsZDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23B39DDB&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=WEEK"
                        style={{borderWidth: 0, BorderRadius: "20px"}} width={`${window.innerWidth - 60}`} height="600" frameBorder="0"
                        scrolling="no"/>
                </Calendar>
            </Block>

            <Block
                title={"Контакти"}
            >
                <Botter/>

            </Block>

        </div>
    );
};

export default CalendarPage;