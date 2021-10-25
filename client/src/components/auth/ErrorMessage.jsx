import React from "react";

const ErrorMessage = ({error, message}) => {
    return (
        error ? <div className="errorMessage" style={{left: error.ref.offsetLeft + "px", width: error.ref.offsetWidth + "px"}}>{message ?? "Wrong"}</div> : null
    )
}

export default ErrorMessage;