import React from 'react';
// import './card.module.scss';

import '../../../sass-compile/assets/scss/assets/_card.scss'; 
import PropTypes from 'prop-types'; 

Card.PropTypes = {
    // title of the card 
    title : PropTypes.string,
    // subtitle of the card 
    subtitle : PropTypes.string, 
    // direction 
    direction : PropTypes.oneOf(['Horizontal', 'Vertical']), 
    // children 
    children : PropTypes.node,
    // type 
    type : PropTypes.oneOf(['Primary', 'Secondary', 'Tertiary']), 
    // onclick function for card
    func : PropTypes.func, 
    // href 
    href : PropTypes.href,
} 

const wrapperClassFunction = (type) => {
    switch (type) {
        case  'Primary' : 
        return "primary-wrapper"

        case 'Secondary' : 
        break; 

        default : 
    }
} 

const renderTitle = (title) => {
    return (
        <p className='title'>{title}</p>
    )
}

const renderChildren = () => {
    // if(typeof(children) === 'img') {

    // }
}

function Card (props) { 
    const {title, type, children} = props;
    console.log(children)
    return (
         <div className = {`${wrapperClassFunction(type)}`} > {title && renderTitle(title)}  {children}</div>
    )
}


export default Card;