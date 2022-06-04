import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import PropTypes from 'prop-types';
import "./error.css"

function Success(props) {
  return (
    <>
        <div className="successful">
            <div className="message">
                <FaCheckCircle className="success_icon" />
                {props.message}
            </div>
        </div>
    </>
  )
}

Success.propTypes = {}

export default Success
