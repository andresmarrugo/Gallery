import React from "react";

const Input = props => {
  //console.log(props.value);
  return (
    <div className="form-group">
      <label className="form-label">
        {props.title}
    
      <input       
        type={props.inputType}
        name={props.name}
      />
    </label>
    </div>
  );
};

export default Input;
