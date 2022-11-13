import React from 'react';

const FirstLine = () => {
    return (
        <div style={{...componentStyle}}> 
                <div>
                    logo
                </div>
                <div>
                    name
                </div>
                <div>
                    telephone
                </div>
                <div>
                    callBatton
                </div>
            </div> 
    );
};

export default FirstLine;


const componentStyle = {
    height: '50px',
    border: '1px solid red',
    display: 'flex',
    justifyContent: "space-between"
}