export function formatTimeDifference(updatedAt?: string): string {
  if (!updatedAt) return "시간 정보 없음";

  const updatedDate = new Date(updatedAt);
  const now = new Date();

  const diffInMs = now.getTime() - updatedDate.getTime();
  const diffInMinutes = Math.floor(diffInMs / 60000);

  if (diffInMinutes < 1) return "방금 전";
  if (diffInMinutes < 60) return `${diffInMinutes}분 전`;

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}시간 전`;

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return `${diffInDays}일 전`;

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return `${diffInMonths}달 전`;

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears}년 전`;
}
