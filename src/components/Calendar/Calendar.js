import React from 'react';
import classes from './Calendar.module.scss'

const Calendar = ({children}) => {
    return (
        <div className={classes.Calendar}>
            {children}
        </div>
    );
};

export default Calendar;