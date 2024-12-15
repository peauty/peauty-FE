export type GroomingTypeType = "TOTAL" | "CLEAN";

export type TotalGroomingBodyTypeType =
  | "CLIPPING_3MM"
  | "CLIPPING_6MM"
  | "CLIPPING_9MM"
  | "SPORTING_3MM"
  | "SPORTING_6MM"
  | "SPORTING_9MM"
  | "PANTALONG_3MM"
  | "PANTALONG_6MM"
  | "PANTALONG_9MM"
  | "BELL_3MM"
  | "BELL_6MM"
  | "BELL_9MM"
  | "SCISSORS";

export type TotalGroomingFaceTypeType =
  | "EGG"
  | "BABY"
  | "GODDESS"
  | "BEAR"
  | "SEAL"
  | "LION"
  | "CROWN"
  | "TEDDY_BEAR"
  | "CANDY"
  | "BROCCOLI"
  | "HIGH_BAR"
  | "POINTED_EARS"
  | "MONKEY"
  | "BEDLINGTON"
  | "POODLINGTON";

export interface SendEstimateProposalResponse {
  processId?: number;
  puppyId?: number;
  designerIds?: number[];
  processStatus?: string;
  createdAt?: string;
}

export interface SendEstimateProposalRequest {
  designerIds?: number[];
  groomingType?: GroomingTypeType;
  detail?: string;
  imageUrls?: string[];
  desiredCost?: number;
  desiredDateTime?: string;
  totalGroomingBodyType?: TotalGroomingBodyTypeType;
  totalGroomingFaceType?: TotalGroomingFaceTypeType;
}

export interface AcceptEstimateResponse {
  puppyId?: number;
  processId?: number;
  processStatus?: string;
  designerId?: number;
  threadId?: number;
  threadStep?: string;
  threadStatus?: string;
  acceptedTime?: string;
}

export interface GetEstimateProposalDetailResponse {
  processId?: number;
  processStatus?: string;
  puppy?: {
    id?: number;
    style?: string;
    totalGroomingBodyType?: string;
    totalGroomingFaceType?: string;
    detail?: string;
    imageUrls?: string[];
    desiredCost?: number;
    desiredDateTime?: string;
  };
  estimateProposal?: Profile;
}

export interface Profile {
  id?: number;
  style?: string;
  totalGroomingBodyType?: string;
  totalGroomingFaceType?: string;
  detail?: string;
  imageUrls?: string[];
  desiredCost?: number;
  desiredDateTime?: string;
}

export interface GetEstimateDesignerWorkspaceProfilesResponse {
  processId?: number;
  processStatus?: string;
  style?: string;
  workspaces?: {
    id?: number;
    style?: string;
    totalGroomingBodyType?: string;
    totalGroomingFaceType?: string;
    detail?: string;
    imageUrls?: string[];
    desiredCost?: number;
    desiredDateTime?: string;
  }[];
}

export interface GetEstimateAndProposalDetailsResponse {
  processId?: number;
  processStatus?: string;
  threadId?: number;
  threadStatus?: string;
  threadStep?: string;
  puppyProfile?: {
    puppyId?: number;
    customerId?: number;
    diseases?: string[];
    name?: string;
    breed?: string;
    weight?: number;
    sex?: string;
    age?: number;
    birthdate?: string;
    profileImageUrl?: string;
    puppySize?: string;
  };
  estimateProposal?: {
    id?: number;
    style?: string;
    totalGroomingBodyType?: string;
    totalGroomingFaceType?: string;
    detail?: string;
    imageUrls?: string[];
    desiredCost?: number;
    desiredDateTime?: string;
  };
  estimate?: {
    threadId?: number;
    estimateId?: number;
    content?: string;
    availableGroomingDate?: string;
    estimatedDuration?: string;
    estimatedCost?: number;
    depositPrice?: number;
    imageUrls?: [string];
  };
}
