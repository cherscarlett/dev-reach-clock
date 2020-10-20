import React from 'react';

const Pixel = ({active, color}) => {
    const style = {
		backgroundColor: active ? color : 'transparent'
    };
    
    return (
        <div className="pixel" style={style} />
    )
}

export default Pixel;