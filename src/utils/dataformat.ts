export const formatDate = (isoDate?: string): string => {
  if (!isoDate) return "";

  const date = new Date(isoDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 두 자리 월
  const day = String(date.getDate()).padStart(2, "0"); // 두 자리 일

  // 시간 변환 (12시간 형식)
  const hours = date.getHours();
  const period = hours < 12 ? "오전" : "오후"; // 오전/오후 구분
  const formattedHours = String(hours % 12 === 0 ? 12 : hours % 12).padStart(
    2,
    "0",
  ); // 12시간 형식
  const minutes = String(date.getMinutes()).padStart(2, "0"); // 두 자리 분

  return `${year}년 ${month}월 ${day}일 ${period} ${formattedHours}:${minutes}`;
};
