import React, { createContext, useState } from "react";

const FormDataContext = createContext({});

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  const updateFormData = (newFormData) => {
    setFormData(newFormData);
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataContext;
