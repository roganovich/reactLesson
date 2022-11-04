import React from "react";

const RadioList = ({options, name, title, value, changeValue}) => {
    return (
        <div>
        <b>{title}</b>
        {options.map((option, id) =>
            <div className="form-check" key={id}>
                <input type="radio" defaultChecked={option.value === value} onClick={() => changeValue(option.value)} className="form-check-input" name={name} id={`radio_${name}_${id}`}
                       value={option.value}/>
                <label className="form-check-label" htmlFor={`radio_${name}_${id}`}>
                    {option.text}
                </label>
            </div>
        )}
        </div>
    )
}

export default RadioList;