import { useState } from "react";
import { kakaoMapAPI } from "../apis/resources/external/kakaoMapAPI";

export function useLocation() {
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const fetchLocation = () => {
    if (!navigator.geolocation) {
      setError("브라우저에서 위치 정보를 지원하지 않습니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const data = await kakaoMapAPI.getAddress(position.coords);
          if (data.documents && data.documents.length > 0) {
            setLocation(data.documents[0].address_name);
            setError("");
          }
        } catch (err) {
          setError("주소 변환 중 오류가 발생했습니다.");
        }
      },
      () => {
        setError("위치 정보를 가져올 수 없습니다.");
      }
    );
  };

  return { location, error, fetchLocation };
}