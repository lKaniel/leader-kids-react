import React from 'react';
import classes from './BlockText.module.scss';
import StringFormatter from "../StringFormatter/StringFormatter";

const BlockText = ({title,lineHeight}) => {
    return (
        <div className={classes.BlockText} style={{lineHeight}}>
            <StringFormatter text={title}/>
        </div>
    );
};

export default BlockText;