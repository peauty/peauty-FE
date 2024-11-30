import { useState } from "react";
import { kakaoMapAPI } from "../apis/resources/external/kakaoMapAPI";

export function useLocation() {
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [locationLoading, setLocationLoading] = useState(false);

  const fetchLocation = () => {
    if (!navigator.geolocation) {
      setError("브라우저에서 위치 정보를 지원하지 않습니다.");
      return;
    }

    setLocationLoading(true); // 로딩 시작
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
        } finally {
          setLocationLoading(false); // 로딩 종료
        }
      },
      () => {
        setError("위치 정보를 가져올 수 없습니다.");
        setLocationLoading(false); // 로딩 종료
      }
    );
  };

  return { location, error, locationLoading, fetchLocation };
}