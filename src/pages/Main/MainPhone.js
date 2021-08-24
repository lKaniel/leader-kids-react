import React from 'react';
import Slider from "../../components/Slider/Slider";
import Block from "../../components/Block/Block";
import bg1 from "../../img/bg1.jpg";
import BlockText from "../../components/BlockText/BlockText";
import bg2 from "../../img/bg2.jpg";
import bg3 from "../../img/bg3.jpg";
import bg4 from "../../img/bg4.jpg";
import bg5 from "../../img/bg5.jpg";
import bg6 from "../../img/bg6.jpg";
import PostsWrapper from "../../components/PostsWrapper/PostsWrapper";
import Post from "../../components/Post/Post";
import SubjectsMenu from "../../components/SubjectsMenu/SubjectsMenu";
import MapWidget from "../../components/MapWidget/MapWidget";
import Botter from "../../components/Botter/Botter";
import {useHistory} from "react-router-dom";

const MainPhone = () => {
    const history = useHistory();
    return (
        <>
            <Slider>
                <Block title={"Стань лідером разом з нами!"} startingBlock={true}
                       img={bg1}
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
                           window.location.replace("https://docs.google.com/forms/d/1i2nrNR4o6e6rRalPRBiP9fPcK2ZELkzsLlfOV3BRR3Y/edit")
                       }}>
                    <BlockText
                        title={"2 заняття математики на тиждень по 40 хв"}/>
                </Block>
                <Block title={"Пакет оптимальний Science"} startingBlock={true}
                       img={bg4}
                       buttonText={"Реєстрація"}
                       buttonAction={() => {
                           window.location.replace("https://docs.google.com/forms/d/1i2nrNR4o6e6rRalPRBiP9fPcK2ZELkzsLlfOV3BRR3Y/edit")
                       }}>
                    <BlockText
                        title={"3 заняття на тиждень по 40 хв: \n" +
                        "2 заняття математики + 1 заняття Science"}/>
                </Block>
                <Block title={"Пакет оптимальний Handmade"} startingBlock={true}
                       img={bg5}
                       buttonText={"Реєстрація"}
                       buttonAction={() => {
                           window.location.replace("https://docs.google.com/forms/d/1i2nrNR4o6e6rRalPRBiP9fPcK2ZELkzsLlfOV3BRR3Y/edit")
                       }}>
                    <BlockText
                        title={"3 заняття на тиждень по 40 хв: \n" +
                        "2 заняття математики + 1 заняття Handmade"}/>
                </Block>
                <Block title={"Пакет Преміум"} startingBlock={true}
                       img={bg6}
                       buttonText={"Реєстрація"}
                       buttonAction={() => {
                           window.location.replace("https://docs.google.com/forms/d/1i2nrNR4o6e6rRalPRBiP9fPcK2ZELkzsLlfOV3BRR3Y/edit")
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
                buttonAction={()=>{
                    history.push('/calendar')
                }}
            >
                <SubjectsMenu/>

            </Block>
            <Block
                title={"Контакти"}
            >
                <Botter/>

            </Block>
        </>
    );
};

export default MainPhone;