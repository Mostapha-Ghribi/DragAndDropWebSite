import React, { useContext, useEffect } from "react";
import { FormCtx } from '../../Form';

const Inputwadia = props => {
  const { id } = props;
  const { setFields, addField, fields, validateField, errors } = useContext(
    FormCtx
  );
  const field = fields[id] || {};
  const {
    name,
    rows,
    value,
    validate,
    placeholder,
    label = "",
    type = "text",
    events = {},
    classes = {},
    selectOptions = []
  } = field;
  const fieldError = errors[id];

  const { onChange, ...restEvents } = events;
  const { contClass, fieldClass, errorClass } = classes;

  const handleChange = event => {
    try {
      setFields(event, field);
    } catch (error) {
      throw error;
    }

    if (typeof onChange === "function") {
      onChange({
        ...field,
        value: event.target.value
      });
    }
  };

  useEffect(() => {
    if (value !== undefined) {
      validateField(id);
    }
  }, [value, id]);

  useEffect(() => {
    addField({
      field: props,
      value
    });
  }, []);

  const fieldProps = {
    ...restEvents,
    id,
    name,
    type,
    value,
    validate,
    placeholder,
    selectOptions,
    className: fieldClass,
    onChange: handleChange
  };

  if (type === "textarea") {
    delete fieldProps.type;
    delete fieldProps.value;

    fieldProps.defaultValue = value;
    fieldProps.rows = rows || 2;
  }
  function getoption(){
    var result = [];
    for (let opt of selectOptions) {
      result.push(<option value={opt.value}>{opt.label}</option>)
    }
    return result;
  }
  function getInput(){
    
    switch (type) {
        case "textarea": return <textarea {...fieldProps} />;
        case "select": return  <select {...fieldProps} >{getoption()}</select>;
        default: return <input {...fieldProps} />; 
    }
  }
  return field && field.value !== undefined ? (
    <div className={contClass}>
      {label}
      {getInput()}
      <p className={errorClass}>{fieldError}</p>
    </div>
  ) : (
    ""
  );
};

export default Inputwadia;