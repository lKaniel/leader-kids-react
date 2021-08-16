import React from 'react';
import classes from './Header.module.scss';

const Header = ({title}) => {
    return (
        <>
            <div className={classes.HeaderWrap}>
                <div className={classes.Header}>
                    <div className={classes.Title}>
                        {title}
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