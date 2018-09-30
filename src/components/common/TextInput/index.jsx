import React from 'react'

/**
 * A configurable and resuble input for the project
 * @class ActionButton
 * @extends {Component}
 */
const TextInput = ({ type, onChange, value, error, placeholder, iconClass, name, required}) => {
  return (
    <div className="required field">
        <div className="ui icon input">
            <input 
              type={type}
              value={value}
              placeholder={placeholder}  
              onChange={onChange}
              name={name}
              required={required}
            />
            <i className={iconClass}></i>
        </div>
    </div>
  )
}

export default TextInput
