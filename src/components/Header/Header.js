import React, {useCallback, useState} from 'react';
import classes from './Header.module.scss';
import logo from '../../img/logo.png';
import menu from '../../img/menu.svg';
import StringFormatter from "../StringFormatter/StringFormatter";
import {Link} from "react-router-dom";
import Botter from "../Botter/Botter";
import Block from "../Block/Block";

const Header = () => {


    const [state, setState] = useState({
        isMenuOpen: false
    })

    const headerCls = [classes.Header]

    if (state.isMenuOpen) {
        headerCls.push(classes.open)
    }

    const openMenu = useCallback(() => {
        setState(prev => {
            return {
                ...prev,
                isMenuOpen: !prev.isMenuOpen
            }
        })
    }, [])

    return (
        <>
            <div className={classes.HeaderWrap}>
                <div className={headerCls.join(" ")}>
                    <img className={classes.Logo} src={logo}/>
                    <img className={classes.MenuBtn} src={menu} onClick={() => {
                        openMenu()
                    }}/>
                    {/*<div className={classes.Menu}></div>*/}
                    <div className={classes.Title}>
                        Майстерня
                        <div>Leader Kids</div>
                    </div>
                    {
                        state.isMenuOpen ?
                            <>
                                <div className={classes.MenuList}>
                                    <Link to={"/"} className={classes.MenuItem} onClick={() => {
                                        openMenu()
                                    }}>
                                        Головна
                                    </Link>
                                    <Link className={classes.MenuItem} onClick={() => {
                                        openMenu()
                                    }}>
                                        Новини
                                    </Link>
                                    <a className={classes.MenuItem} href={"https://docs.google.com/forms/d/1i2nrNR4o6e6rRalPRBiP9fPcK2ZELkzsLlfOV3BRR3Y/edit"}>
                                        Реєстрація
                                    </a>
                                </div>
                                <Block
                                    title={"Контакти"}
                                >
                                    <Botter withoutMap={true}/>

                                </Block>
                            </> : null
                    }
                </div>
            </div>
            <div className={classes.LeftRounder}></div>
            <div className={classes.PhantomHeader}>

            </div>
        </>
    );
};

export default Header;