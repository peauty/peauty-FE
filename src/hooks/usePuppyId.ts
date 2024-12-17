import { useEffect, useState } from "react";
import { getPuppyProfilesWithCanStartProcessStatus} from "../apis/customer/resources/bidding"; // 실제 경로에 맞게 수정
import{GetPuppyProfilesWithCanStartProcessStatusResponse } from "../types/customer/bidding"

export const usePuppyId = (userId: number) => {
  const [puppyId, setPuppyId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPuppyId = async () => {
      setLoading(true);
      try {
        const response: GetPuppyProfilesWithCanStartProcessStatusResponse = await getPuppyProfilesWithCanStartProcessStatus(userId);
        // 첫 번째 강아지의 puppyId를 가져오기 (puppies 배열이 비어있지 않다고 가정)
        if (response.puppies.length > 0) {
          setPuppyId(response.puppies[0].puppyId);
        } else {
          setError("강아지 정보가 없습니다.");
        }
      } catch (err) {
        setError("정보를 가져오는 중 오류가 발생했습니다.");
      
      } finally {
        setLoading(false);
      }
    };

    fetchPuppyId();
  }, [userId]);

  return { puppyId, loading, error };
};
