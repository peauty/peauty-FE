import axios from "axios";

const KAKAO_KEY = import.meta.env.VITE_KAKAO_MAP_KEY;
const KAKAO_MAP_URL = "https://dapi.kakao.com/v2/local/geo/coord2regioncode.json";

interface KakaoMapAPIInput {
  longitude: number;
  latitude: number;
}

interface KakaoMapAPIOutput {
  documents: Array<{
    address_name: string;
    region_1depth_name?: string;
    region_2depth_name?: string;
  }>;
}

export const kakaoMapAPI = {
  getAddress: async ({ longitude, latitude }: KakaoMapAPIInput): Promise<KakaoMapAPIOutput> => {
    const response = await axios.get<KakaoMapAPIOutput>(KAKAO_MAP_URL, {
      params: { x: longitude, y: latitude },
      headers: {
        Authorization: `KakaoAK ${KAKAO_KEY}`,
      },
    });
    return response.data;
  },
};