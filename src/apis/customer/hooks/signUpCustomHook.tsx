import { useState, useEffect } from "react";
import { RegisterPuppyRequest } from "../../../types/customer/puppy";

export function signUpCustomHook() {
  const [inputData, setInputData] = useState<RegisterPuppyRequest>({
    name: "",
    breed: "리트리버",
    weight: 0,
    sex: "M",
    age: 0,
    birthdate: "",
    detail: "",
    disease: [], // disease 초기값을 빈 배열로 설정
    diseaseDescription: "",
    profileImageUrl: "",
    puppySize: "소형견",
  });

  const handleChange = (key: string, value: string) => {
    setInputData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleDiseaseChange = (diseaseValue: string[]) => {
    setInputData((prev) => ({
      ...prev,
      disease: diseaseValue, // disease 필드 업데이트
    }));
  };

  useEffect(() => {
    console.log("Updated inputData:", inputData);
  }, [inputData]);

  return {
    inputData,
    handleChange,
    handleDiseaseChange, // 반환에 handleDiseaseChange 추가
  };
}
