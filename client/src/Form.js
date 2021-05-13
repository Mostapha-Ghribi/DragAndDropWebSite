import React, { createContext, Component } from "react";

import validations  from './validations'

export const FormCtx = createContext({
  fields: {},
  errors: {}
});

export default class Form extends Component {
  state = {
    fields: {},
    errors: {}
  };

  render() {
    const { fields, errors } = this.state;
    const formCtx = {
      fields,
      errors,
      addField: data => {
        this.addField(data);
      },
      setFields: this.setFields,
      validateField: this.validateField
    };

    return (
      <form action="">
        <FormCtx.Provider value={formCtx}>
          {this.props.children}
        </FormCtx.Provider>
      </form>
    );
  }

  setFields = (event, { id }) => {
    event.persist();

    const { fields } = this.state;
    const field = fields[id];

    this.addField({
      field: {
        ...field,
        value: event.currentTarget.value
      }
    });
  };

  addField = ({ field }) => {
    const { id } = field;

    field = {
      value: "",
      ...field
    };

    if (id) {
      this.setState(prevState => {
        return {
          ...prevState,
          fields: {
            ...prevState.fields,
            [id]: field
          }
        };
      });

      return;
    }

    throw new Error(`please add 'id' field to the input: ${field}`);
  };

  validateField = id => {
    let error = "";
    
    const {
      value: fieldValue,
      validate,
      displayName,
      customRules = {}
    } = this.state.fields[id];
    const rules = validate ? validate.split("|") : "";

    if (rules.length) {
      for (const rule in rules) {
        const ruleName = rules[rule];
        const validation = validations[ruleName] || customRules[ruleName];
        const isRuleSatisfied =
          ruleName !== "required" && !fieldValue
            ? true
            : validation.rule().test(fieldValue.toString());

        if (!isRuleSatisfied) {
          error = validation.formatter.apply(null, [displayName || id]);
        }

        if (error !== "") {
          break;
        }
      }

      this.setState(prevState => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          [id]: error
        }
      }));
    }
  };
}