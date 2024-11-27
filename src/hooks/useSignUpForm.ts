import { useState, useEffect } from "react";

export function useSignUpForm(StepWords: any[]) {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<Record<string, string>>({});

  const { title, subTitle, label, placeholder, regex, errorMessage, key } =
    StepWords[currentStep];

  const handleInputChange = (value: string) => {
    setInputValue(value);
    if (regex && regex.test(value)) {
      setError("");
    } else if (regex) {
      setError(errorMessage);
    }
  };

  const handleNextStep = () => {
    if (regex && !regex.test(inputValue)) {
      setError(errorMessage);
      return;
    }

    setFormData((prev) => ({ ...prev, [key]: inputValue }));
    setInputValue("");
    setError("");

    if (currentStep < StepWords.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBackStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setInputValue(formData[StepWords[currentStep - 1].key] || "");
      setError("");
    }
  };

  return {
    currentStep,
    inputValue,
    error,
    formData,
    title,
    subTitle,
    label,
    placeholder,
    handleInputChange,
    handleNextStep,
    handleBackStep,
  };
}