import React from 'react'

const TextInput = ({ type, onChange, value, error, placeholder, iconClass, name}) => {
  return (
    <div className="required field">
        <div className="ui icon input">
            <input 
              type={type}
              value={value}
              placeholder={placeholder}  
              onChange={onChange}
              name={name}
            />
            <i className={iconClass}></i>
        </div>
    </div>
  )
}

export default TextInput;
