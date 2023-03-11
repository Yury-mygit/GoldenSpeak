import React from 'react';

const MenyType1 = ({children, styleClass}) => {
    return (
    <div className={styleClass} >  
        <h3>меню</h3>
        {/* <label>Колличество новостей</label> */}

        {children}

       
    </div>
    );
};

export default MenyType1;