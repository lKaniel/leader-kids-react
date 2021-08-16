import React from 'react';

const StringFormatter = ({text}) => {
    const list = text.split('\n');
    const newText = list.map((str, i) => {
        if (i + 1 === list.length){
            return (
                <>{str}</>
            )
        }
        return (
            <>{str}<br/> </>
        )
    });
    return (
        <>
            {newText}
        </>
    );
};

export default StringFormatter;