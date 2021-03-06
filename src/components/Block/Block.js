import React, {useCallback} from 'react';
import classes from './Block.module.scss';

const Block = ({title, children, buttonText, buttonAction, startingBlock, img}) => {
    const blockCls = [classes.Block];
    if (startingBlock){
        blockCls.push(classes.starting)
    }

    return (
        <div className={classes.BlockWrap + " " + (startingBlock ? classes.startingWrap : "")}
        >
            <div className={blockCls.join(" ")}>
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
                    <div className={classes.OuterButton} onClick={(e)=>{
                        e.stopPropagation()
                        buttonAction()
                    }}>
                        {buttonText} &rarr;
                    </div> : null
                }
            </div>
        </div>
    );
};

export default Block;