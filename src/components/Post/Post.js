import React from 'react';
import classes from './Post.module.scss';

const Post = ({title, text}) => {
    return (
        <div className={classes.Post}>
            <div className={classes.Title}>
                {title}
            </div>
            <div className={classes.Text}>
                {text}
            </div>
            <div className={classes.MoreButton}>
                &rarr;
            </div>
        </div>
    );
};

export default Post;