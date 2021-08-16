import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Block from "./components/Block/Block";
import BlockText from "./components/BlockText/BlockText";
import Post from "./components/Post/Post";

import bg1 from './img/bg1.jpg'
import bg2 from './img/bg2.jpg'
import bg3 from './img/bg3.jpg'
import bg4 from './img/bg4.jpg'
import bg5 from './img/bg5.jpg'
import bg6 from './img/bg6.jpg'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import Slider from "./components/Slider/Slider";
import MapWidget from "./components/MapWidget/MapWidget";
import SubjectsMenu from "./components/SubjectsMenu/SubjectsMenu";
import PostsWrapper from "./components/PostsWrapper/PostsWrapper";

function App() {
    return (
        <Layout>
            <Header title={"Майстерня"}/>
            <Slider>
                <Block title={"Стань лідером разом з нами!"} startingBlock={true}
                       buttonText={"Дізнатися більше"}
                       img={bg1}
                       buttonAction={() => {
                           alert(1)
                       }}
                >
                    <BlockText
                        title={"розвиваючі заняття для дітей віком 6-10 років    (1-4 клас) за трьома напрямками: математика, Science, Handmade"}/>
                </Block>
                <Block title={"Ми пропонуємо заняття:"} startingBlock={true}
                       img={bg2}>
                    <BlockText
                        title={"- за авторськими програми;\n- у групах до 10 осіб;\n" +
                        "- в ігровій формі;\n" +
                        "- без домашніх завдань;\n" +
                        "- без перерв на карантин;\n" +
                        "- з підготовкою до вступу у класи з поглибленим вивченням математики."}
                    />
                </Block>
                <Block title={"Пакет Базовий"} startingBlock={true}
                       img={bg3}
                       buttonText={"Реєстрація"}
                       buttonAction={() => {
                           alert(1)
                       }}>
                    <BlockText
                        title={"2 заняття математики на тиждень по 40 хв"}/>
                </Block>
                <Block title={"Пакет оптимальний Science"} startingBlock={true}
                       img={bg4}
                       buttonText={"Реєстрація"}
                       buttonAction={() => {
                           alert(1)
                       }}>
                    <BlockText
                        title={"3 заняття на тиждень по 40 хв: \n" +
                        "2 заняття математики + 1 заняття Science"}/>
                </Block>
                <Block title={"Пакет оптимальний Handmade"} startingBlock={true}
                       img={bg5}
                       buttonText={"Реєстрація"}
                       buttonAction={() => {
                           alert(1)
                       }}>
                    <BlockText
                        title={"3 заняття на тиждень по 40 хв: \n" +
                        "2 заняття математики + 1 заняття Handmade"}/>
                </Block>
                <Block title={"Пакет Преміум"} startingBlock={true}
                       img={bg5}
                       buttonText={"Реєстрація"}
                       buttonAction={() => {
                           alert(1)
                       }}>
                    <BlockText
                        title={"4 заняття на тиждень по 40 хв:\n" +
                        "2 заняття Математики + 1 заняття Science + 1 заняття Handmade"}/>
                </Block>
            </Slider>
            <Block
                title={"Новини"}
                buttonText={"Більше новин"}
                buttonAction={() => {
                    alert(1)
                }}
            >
                <PostsWrapper>
                    <Post
                        title={"Початок занять 7 вересня"}
                        text={"Оголошуємо про набір до\n" +
                        "майстерні учнів 1-4 класів"}
                    />
                    {window.innerWidth > 700 ?
                        <Post
                            title={"Реєстрація відкрита"}
                            text={"Оголошуємо реєстрацію відкритою!"}
                        /> : null}
                </PostsWrapper>
            </Block>
            <Block
                title={"Предмети"}
                buttonText={"Розклад"}
            >
                <SubjectsMenu/>

            </Block>
            <Block
                title={"Контакти"}
            >
                <MapWidget/>
                <BlockText
                    lineHeight={"30px"}
                    title={"Печерський узвіз, 13А\n" +
                    "kids@leader171.kiev.ua\n" +
                    "0508227543"}/>

            </Block>
            {/*<iframe*/}
            {/*    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23039BE5&ctz=Europe%2FKiev&src=bm1lMHN1ZTI5Y2RpaTMxbnZmazhqaDdsZDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23B39DDB&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=WEEK"*/}
            {/*    style={{borderWidth : 0, BorderRadius: "20px"}} width="800" height="600" frameBorder="0" scrolling="no"/>*/}
        </Layout>
    );
}

export default App;
