import { useState } from "react";

export const useValidation = () => {
  const validationInitialState = {
    title: false,
    description: false,
    duration: false,
    authors: false,
    submitButton: false,
  };
  const [formValidationData, setFormValidationData] = useState(validationInitialState);

  const validateFormElement = (condition, elementName) => {
    if (condition) {
      const updatedValidationState = {...formValidationData, [elementName]: true};
      const isFormInvalid = Object.entries(updatedValidationState).find(([key, value]) => {
        return key !== 'submitButton' && !value;
      });
      if (isFormInvalid) {
        setFormValidationData(updatedValidationState);
      } else {
        setFormValidationData({...updatedValidationState, submitButton: true});
      }
    } else {
      setFormValidationData({
        ...formValidationData,
        [elementName]: false,
        submitButton: false
      });
    }
  }

  const validateForm = target => {
    const { name, value } = target;

    switch (name) {
      case 'description':
        validateFormElement(value.length > 2, name);
        break;
      case 'title':
        validateFormElement(value.length, name);
        break;
      case 'duration':
        validateFormElement(value > 0, name);
        break;
      case 'authors':
        validateFormElement(value, name);
        break;
      default:
    }
  };

  return [formValidationData, validateForm];
};
