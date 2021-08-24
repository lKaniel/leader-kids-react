import React from 'react';
import classes from './Botter.module.scss';
import MapWidget from "../MapWidget/MapWidget";
import BlockText from "../BlockText/BlockText";

const Botter = () => {
    return (
        <div className={classes.Botter}>
            <MapWidget/>
            <BlockText
                lineHeight={"30px"}
                title={"Печерський узвіз, 13А\n" +
                "kids@leader171.kiev.ua\n" +
                "0508227543"}/>
        </div>
    );
};

export default Botter;