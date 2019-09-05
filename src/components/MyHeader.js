import React from 'react';
import MyClock from './MyClock';

let time = new Date().toLocaleString();

class MyHeader extends React.Component {

    render() {
        return(
           <div className="header">
               <div>
                <p className="sub-header">Header coming soon</p>
                <MyClock />
               </div>
            </div>
        );
    }
}

export default MyHeader;