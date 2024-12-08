import { useState, useEffect } from "react";
import { RegisterPuppyRequest } from "../../../types/customer/puppy";

export function signUpCustomHook() {
  const [inputData, setInputData] = useState<RegisterPuppyRequest>({
    name: "",
    breed: "TERRIER",
    weight: 0,
    sex: "M",
    age: 0,
    birthdate: "",
    detail: "",
    disease: [],
    diseaseDescription: "",
    profileImageUrl: "",
    puppySize: "MEDIUM",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: string) => {
    const value = event.target.value;
    console.log(`Key: ${key}, Value: ${value}`);
    setInputData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const updateDisease = (diseases: string[]) => {
    // diseases는 이제 string[] 타입을 받습니다.
    console.log(diseases); // 질병 이력을 처리
  };
  


  // const updateDisease = (diseases:[]) => {
  //   setInputData((prev) => ({
  //     ...prev,
  //     disease: diseases,
  //   }));
  // };

  const updateDiseaseDescription = (description: string) => {
    setInputData((prev) => ({
      ...prev,
      diseaseDescription: description,
    }));
  };

  const setPuppySize = (size: "SMALL" | "MEDIUM" | "LARGE") => {
    setInputData((prev) => ({ ...prev, puppySize: size }));
  };

  const setBreed = (breed: RegisterPuppyRequest['breed']) => {
    setInputData((prev) => ({ ...prev, breed }));
  };
  
  useEffect(() => {
    console.log("Updated inputData:", inputData);
  }, [inputData]);

  return {
    inputData,
    handleChange,
    updateDisease,
    updateDiseaseDescription,
    setPuppySize,
    setBreed,
  };
}
