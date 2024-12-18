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
    puppyId?: number;
    customerId?: number;
    name?: string;
    breed?: string;
    weight?: number;
    sex?: string;
    age?: number;
    birthdate?: string;
    profileImageUrl?: string;
    puppySize?: string;
    diseases?: string[];
    hasOngoingProcess?: boolean;
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
}

export interface PuppyProfile {
  puppyId?: number;
  customerId?: number;
  name?: string;
  breed?: string;
  weight?: number;
  sex?: string;
  age?: number;
  birthdate?: string;
  profileImageUrl?: string;
  puppySize?: string;
  diseases?: string[];
  hasOngoingProcess?: boolean;
}

export interface EstimateProposalProfile {
  id?: number;
  style?: string;
  totalGroomingBodyType?: string;
  totalGroomingFaceType?: string;
  detail?: string;
  imageUrls?: string[];
  desiredCost?: number;
  desiredDateTime?: string;
}

export interface GetEstimateAndProposalDetailsResponse {
  processId?: number;
  processStatus?: string;
  threadId?: number;
  threadStatus?: string;
  threadStep?: string;
  puppy?: {
    puppyId?: number;
    customerId?: number;
    name?: string;
    breed?: string;
    weight?: number;
    sex?: string;
    age?: number;
    birthdate?: string;
    profileImageUrl?: string;
    puppySize?: string;
    diseases?: string[];
    hasOngoingProcess?: boolean;
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
    imageUrls?: string[];
  };
  designer?: {
    workspaceName?: string;
    address?: string;
  };
}

export interface EstimateProfile {
  threadId?: number;
  estimateId?: number;
  content?: string;
  availableGroomingDate?: string;
  estimatedDuration?: string;
  estimatedCost?: number;
  depositPrice?: number;
  imageUrls?: string[];
}

export interface DesignerProfile {
  workspaceName?: string;
  address?: string;
}

export interface GetOngoingProcessWithThreadsResponse {
  process?: {
    processId?: number;
    processStatus?: string;
    processCreatedAt?: string;
    processStatusModifiedAt?: string;
    puppy?: {
      puppyId?: number;
      customerId?: number;
      name?: string;
      breed?: string;
      weight?: number;
      sex?: string;
      age?: number;
      birthdate?: string;
      profileImageUrl?: string;
      puppySize?: string;
      diseases?: string[];
      hasOngoingProcess?: boolean;
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
    threadInfo?: {
      processId?: number;
      style?: string;
      threadId?: number;
      threadStep?: string;
      threadStatus?: string;
      isReviewed?: boolean;
      threadCreatedAt?: string;
      threadStepModifiedAt?: string;
      designer?: {
        workspaceName?: string;
        address?: string;
      };
      estimate?: {
        threadId?: number;
        estimateId?: number;
        content?: string;
        availableGroomingDate?: string;
        estimatedDuration?: string;
        estimatedCost?: number;
        depositPrice?: number;
        imageUrls?: string[];
      };
    };
    estimate?: EstimateProfile;
  };
  threads?: ThreadProfile[];
}

export interface ProcessProfile {
  processId?: number;
  processStatus?: string;
  processCreatedAt?: string;
  processStatusModifiedAt?: string;
  puppy?: {
    puppyId?: number;
    customerId?: number;
    name?: string;
    breed?: string;
    weight?: number;
    sex?: string;
    age?: number;
    birthdate?: string;
    profileImageUrl?: string;
    puppySize?: string;
    diseases?: string[];
    hasOngoingProcess?: boolean;
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
  threadInfo?: {
    processId?: number;
    style?: string;
    threadId?: number;
    threadStep?: string;
    threadStatus?: string;
    isReviewed?: boolean;
    threadCreatedAt?: string;
    threadStepModifiedAt?: string;
    designer?: {
      workspaceName?: string;
      address?: string;
    };
    estimate?: {
      threadId?: number;
      estimateId?: number;
      content?: string;
      availableGroomingDate?: string;
      estimatedDuration?: string;
      estimatedCost?: number;
      depositPrice?: number;
      imageUrls?: string[];
    };
  };
  estimate?: EstimateProfile;
}

export interface ThreadProfile {
  processId?: number;
  style?: string;
  threadId?: number;
  threadStep?: string;
  threadStatus?: string;
  isReviewed?: boolean;
  threadCreatedAt?: string;
  threadStepModifiedAt?: string;
  designer?: {
    workspaceName?: string;
    address?: string;
  };
  estimate?: {
    threadId?: number;
    estimateId?: number;
    content?: string;
    availableGroomingDate?: string;
    estimatedDuration?: string;
    estimatedCost?: number;
    depositPrice?: number;
    imageUrls?: string[];
  };
}

export interface GetAllStep3AboveThreadsResponse {
  threads?: {
    processId?: number;
    style?: string;
    threadId?: number;
    threadStep?: string;
    threadStatus?: string;
    isReviewed?: boolean;
    threadCreatedAt?: string;
    threadStepModifiedAt?: string;
    designer?: {
      workspaceName?: string;
      address?: string;
    };
    estimate?: {
      threadId?: number;
      estimateId?: number;
      content?: string;
      availableGroomingDate?: string;
      estimatedDuration?: string;
      estimatedCost?: number;
      depositPrice?: number;
      imageUrls?: string[];
    };
  }[];
}

export interface GetPuppyProfilesWithCanStartProcessStatusResponse {
  puppies?: {
    puppyId?: number;
    customerId?: number;
    name?: string;
    breed?: string;
    weight?: number;
    sex?: string;
    age?: number;
    birthdate?: string;
    profileImageUrl?: string;
    puppySize?: string;
    diseases?: string[];
    hasOngoingProcess?: boolean;
  }[];
}
