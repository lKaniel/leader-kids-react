import React from 'react';
import classes from './Block.module.scss';

const Block = ({title, children, buttonText, buttonAction, startingBlock, img}) => {
    return (
        <div className={classes.BlockWrap}>
            <div className={classes.Block + " " + (startingBlock ? classes.starting : "")}>
                {startingBlock ?
                    <div className={classes.ImgWrap} style={{
                        background: `#DEDAE0 url("${img}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}/> : null
                }
                <div className={classes.Title}>
                    {title}
                </div>
                {children}
                {buttonText || buttonAction ?
                    <div className={classes.OuterButton} onClick={buttonAction}>
                        {buttonText} &rarr;
                    </div> : null
                }
            </div>
        </div>
    );
};

export default Block;