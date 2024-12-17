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
  responseCode: string;
  errorMessage: string;
  serviceErrorMessage: string;
  data: {
    processId: number;
    processStatus: string;
    puppy: {
      puppyId: number;
      customerId: number;
      name: string;
      breed: string;
      weight: number;
      sex: string;
      age: number;
      birthdate: string;
      profileImageUrl: string;
      puppySize: string;
      diseases: string[];
    };
    estimateProposal: {
      id: number;
      style: string;
      totalGroomingBodyType: string;
      totalGroomingFaceType: string;
      detail: string;
      imageUrls: string[];
      desiredCost: number;
      desiredDateTime: string;
    };
  };
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
export interface GetOngoingProcessWithThreadsResponse {
  process: {
    processId: number;
    processStatus: string;
    processCreatedAt: string;
    estimateProposal: {
      id: number;
      style: string;
      totalGroomingBodyType: string;
      totalGroomingFaceType: string;
      detail: string;
      imageUrls: string[];
      desiredCost: number;
      desiredDateTime: string;
    };
  };
  threads: {
    processId: number;
    threadId: number;
    threadStep: string;
    threadStatus: string;
    threadStepModifiedAt?: string; // 추가
    designer: {
      designerId: number;
      workspaceName: string;
      designerName: string;
      reviewCount: number;
      reviewRating: number;
      profileImageUrl: string;
      badges: {
        badgeId: number;
        badgeName: string;
        badgeContent: string;
        badgeImageUrl: string;
        isRepresentativeBadge: boolean;
        badgeColor: string;
        badgeType: string;
      }[];
      address: string;
      scissors: string;
    };
  }[];
}
export interface GetStep2ProcessWithThreadsResponse {
  process: {
    processId: number;
    processStatus: string;
    processCreatedAt: string;
    processStatusModifiedAt?: string;
    estimateProposal: {
      id: number;
      style: string;
      totalGroomingBodyType: string;
      totalGroomingFaceType: string;
      detail: string;
      imageUrls: string[];
      desiredCost: number;
      desiredDateTime: string;
    };
  };
  threads: {
    processId: number;
    threadId: number;
    threadStep: string;
    threadStatus: string;
    threadCreatedAt: string;
    threadStepModifiedAt: string;
    designer: {
      designerId: number;
      workspaceName: string;
      designerName: string;
      reviewCount: number;
      reviewRating: number;
      profileImageUrl: string;
      badges: {
        badgeId: number;
        badgeName: string;
        badgeContent: string;
        badgeImageUrl: string;
        isRepresentativeBadge: boolean;
        badgeColor: string;
        badgeType: string;
      }[];
      address: string;
      scissors: string;
    };
    estimate: {
      threadId: number;
      estimateId: number;
      content: string;
      availableGroomingDate: string;
      estimatedDuration: string;
      estimatedCost: number;
      depositPrice: number;
      imageUrls: string[];
    };
  }[];
}
export interface GetAllStep3AboveThreadsResponse {
  threads: any;
  responseCode: string;
  errorMessage: string;
  serviceErrorMessage: string;
  data: {
    threads: {
      processId: number;
      style: string;
      threadId: number;
      threadStep: string;
      threadStatus: string;
      isReviewed: boolean;
      threadCreatedAt: string;
      designer: {
        designerId: number;
        workspaceName: string;
        designerName: string;
        reviewCount: number;
        reviewRating: number;
        profileImageUrl: string;
        badges: {
          badgeId: number;
          badgeName: string;
          badgeContent: string;
          badgeImageUrl: string;
          isRepresentativeBadge: boolean;
          badgeColor: string;
          badgeType: string;
        }[];
        address: string;
        scissors: string;
      };
      estimate: {
        threadId: number;
        estimateId: number;
        content: string;
        availableGroomingDate: string;
        estimatedDuration: string;
        estimatedCost: number;
        depositPrice: number;
        imageUrls: string[];
      };
    }[];
  };
}
export interface GetPuppyProfilesWithCanStartProcessStatusResponse {
  responseCode: string;
  errorMessage: string;
  serviceErrorMessage: string;
  puppies: {
    puppyId: number;
    customerId: number;
    name: string;
    breed: string;
    weight: number;
    sex: string;
    age: number;
    birthdate: string;
    profileImageUrl: string;
    puppySize: string;
    hasOngoingProcess: boolean;
  }[];
}
export interface GetEstimateAndProposalDetailsResponse {
  processId: number;
  processStatus: string;
  threadId: number;
  threadStatus: string;
  threadStep: string;
  puppy: {
    puppyId: number;
    customerId: number;
    name: string;
    breed: string;
    weight: number;
    sex: string;
    age: number;
    birthdate: string;
    profileImageUrl: string;
    puppySize: string;
    diseases: string[];
  };
  estimateProposal: {
    id: number;
    style: string;
    totalGroomingBodyType: string;
    totalGroomingFaceType: string;
    detail: string;
    imageUrls: string[];
    desiredCost: number;
    desiredDateTime: string;
  };
  estimate: {
    threadId: number;
    estimateId: number;
    content: string;
    availableGroomingDate: string;
    estimatedDuration: string;
    estimatedCost: number;
    depositPrice: number;
    imageUrls: string[];
  };
  designer: {
    designerId: number;
    workspaceName: string;
    designerName: string;
    reviewCount: number;
    reviewRating: number;
    profileImageUrl: string;
    badges: {
      badgeId: number;
      badgeName: string;
      badgeContent: string;
      badgeImageUrl: string;
      isRepresentativeBadge: boolean;
      badgeColor: string;
      badgeType: string;
    }[];
    address: string;
    scissors: string;
  };
}
