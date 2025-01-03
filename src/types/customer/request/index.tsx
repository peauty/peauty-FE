import { Badge } from "../customer";

export interface ShopOverviewProps {
  workspaceName: string;
  reviewRating: number;
  reviewsCount: number;
  introduceTitle: string;
  introduce: string;
  noticeTitle: string;
  notice: string;
  address: string;
  representativeBadges: Badge[];
}
export interface ShopOverviewinfoProps {
  workspaceName: string;
  reviewRating: number;
  reviewsCount: number;
  introduceTitle?: string;
  introduce?: string;
  address: string;
  representativeBadges: Badge[];
}

export interface ShopDetailProps {
  id?: string;
  workspaceName: string;
  address: string;
  addressDetail: string;
  yearOfExperience: number;
  openHours: string;
  closeHours: string;
  openDay: string;
  paymentOptions: string[];
  phoneNumber: string;
  licenses: string[];
}
export interface ShopDetailInfoProps {
  workspaceName: string;
  address: string;
  addressDetail: string;
  openHours: string;
  closeHours: string;
  openDay: string;
  paymentOptions: string[];
  phoneNumber: string;
}
