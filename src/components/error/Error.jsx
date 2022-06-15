import React from 'react';

function Error(props) {
  return (
    <>
        <div className="error">
            <div className="message">
                {props.error}
            </div>
        </div>
    </>
  )
}

export default Error
