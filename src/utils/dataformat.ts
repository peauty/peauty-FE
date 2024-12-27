export const formatDate = (isoDate?: string): string => {
  if (!isoDate) return "";

  // 시간 부분이 한 자리일 경우, 앞에 0을 붙여서 ISO 형식으로 만듦
  const fixedIsoDate = isoDate.replace(
    /T(\d):/,
    (_match, hour) => `T0${hour}:`,
  );

  const date = new Date(fixedIsoDate);

  if (isNaN(date.getTime())) return "유효하지 않은 날짜입니다"; // 날짜가 잘못된 경우 예외 처리

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

  return `${year} . ${month} . ${day} . ${period} ${formattedHours}:${minutes}`;
};

export const formatDashDate = (isoDate?: string): string => {
  if (!isoDate) return "";
  const transDot = isoDate.replace(/-/g, ".");
  return transDot;
};
