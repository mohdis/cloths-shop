import React from 'react'
import './form-input.syle.scss'

const InputForm = ({ label, ...otherProps }) => {
    return (
        <div className="group">
            <input className="form-input"  {...otherProps} />
            {label ?
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
                : null}

        </div>
    )
}
export default InputForm