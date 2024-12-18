import { atom } from "recoil";

export interface ReviewData {
  userId: number;
  puppyId: number;
  processId: number;
  threadId: number;
  reviewId?: number;
}

export const ReviewAtom = atom<ReviewData | null>({
  key: "ReviewData",
  default: null,
});
