import React from 'react';
import classes from './Botter.module.scss';
import MapWidget from "../MapWidget/MapWidget";
import BlockText from "../BlockText/BlockText";
import viber from "../../img/viber.svg"
import phone from "../../img/phone.svg"
import mail from "../../img/mail.svg"
import location from "../../img/location.svg"

const Botter = ({withoutMap}) => {
    return (
        <div className={classes.Botter}>
            {!withoutMap ?

                <MapWidget/>
                : null}
            <div className={classes.Container}>
                <div className={classes.Line}>
                    <img src={location} className={classes.Icon}/>
                    <div className={classes.Text}>
                        Печерський узвіз, 13А
                    </div>
                </div>
                <div className={classes.Line}>
                    <img src={mail} className={classes.Icon}/>
                    <div className={classes.Text}>
                        kids@leader171.kiev.ua
                    </div>
                </div>
                <div className={classes.Line}>
                    <a href={"tel:+380508227543"}>
                        <img src={phone} className={classes.Icon} style={{color: "#"}}/>
                        <div className={classes.Text}>
                            (+380) 50 822 75 43
                        </div>
                    </a>
                    <a href={"viber://add?number=380508227543"}>
                        <img src={viber} className={classes.Icon}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Botter;