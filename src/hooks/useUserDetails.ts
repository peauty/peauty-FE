import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { CustomJwtPayload } from "../types/\btypes";

export function useUserDetails() {
  const [userDetails, setUserDetails] = useState<{
    userId: number | null;
    role: string | null;
  }>({ userId: null, role: null });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      setIsLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode<CustomJwtPayload>(accessToken);
      setUserDetails({
        userId: decoded.user.userId,
        role: decoded.user.role,
      });
    } catch (error) {
      console.error("토큰 디코드 중 오류 발생:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { ...userDetails, isLoading };
}
