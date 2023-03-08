import React, { createContext, useState } from "react";
import { newDate } from "../src/config/GenericFunctions";

const FormContext = createContext();

export function FormProvider({ children, type, selectedDate, data }) {
  const [formData, setFormData] = useState(
    (type === "activity" && {
      category: data ? data.data.category : "",
      date: data ? newDate(data.data.date) : new Date(selectedDate),
      subcategory: data ? data.data.subcategory : "",
      amount: data ? data.data.amount : "",
    }) ||
      (type === "goal" && {
        name: data ? data.data.name : "",
        amount: data ? data.data.amount : "",
        category: data ? data.data.category : "",
        repetition: data ? data.data.repetition : "",
        measuredBy: data ? data.data.measuredBy : "",
        specificity: data ? data.data.specificity : "any",
        stayBelow: data ? data.data.stayBelow : false,
      }) ||
      (type === "mood" && {
        rating: data ? data.data.rating : 4,
        date: data ? data.data.date : new Date(),
        note: data ? data.data.note : "",
      })
  );

  const [errors, setErrors] = useState([]);
  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        errors,
        setErrors,
        docId: data ? data.id : null,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;
