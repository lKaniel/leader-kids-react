import React from 'react';
import classes from './PostsWrapper.module.scss'
const PostsWrapper = ({children}) => {
    return (
        <div className={classes.PostsWrapper}>
            {children}
        </div>
    );
};

export default PostsWrapper;