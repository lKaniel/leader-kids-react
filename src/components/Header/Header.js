import React from 'react';
import classes from './Header.module.scss';
import logo from '../../img/photo_2021-08-21_19.43.07-removebg-preview.png';
import StringFormatter from "../StringFormatter/StringFormatter";

const Header = ({title}) => {
    return (
        <>
            <div className={classes.HeaderWrap}>
                <div className={classes.Header}>
                    <img src={logo}/>
                    {/*<div className={classes.Menu}></div>*/}
                    <div className={classes.Title}>
                        Майстерня<div>Leader Kids</div>
                    </div>
                </div>
            </div>
            <div className={classes.LeftRounder}></div>
            <div className={classes.PhantomHeader}>

            </div>
        </>
    );
};

export default Header;