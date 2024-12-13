export interface ShopOverviewProps {
  workspaceName: string;
  reviewRating: number;
  reviewsCount: number;
  introduceTitle: string;
  introduce: string;
  noticeTitle: string;
  notice: string;
  address: string;
}
export interface ShopOverviewinfoProps {
  workspaceName: string;
  reviewRating: number;
  reviewsCount: number;
  introduceTitle?: string;
  introduce?: string;
  address: string;
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
