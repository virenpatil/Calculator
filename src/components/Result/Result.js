import React from 'react';
import './Result.css';
export default (props) => {
    return (
        <div>
            <div className="display">
                {props.total}
            </div>
        </div>
    )
}