import { useState } from 'react';

function useForm(initialsValues) {
  const [values, setValues] = useState(initialsValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(element) {
    setValue(
      element.target.getAttribute('name'),
      element.target.value,
    );
  }

  function clearForm() {
    setValues(initialsValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
