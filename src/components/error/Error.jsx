import React from 'react';
import PropTypes from 'prop-types'

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

Error.propTypes = {}

export default Error
