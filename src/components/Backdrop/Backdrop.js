import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    let classes = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClose']

    return (
       <div className={classes.join(' ')}></div> 
    )    
};

export default backdrop;