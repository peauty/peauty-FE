export interface SendEstimateResponse {
  estimateId?: number;
  biddingThreadId?: number;
  content?: string;
  availableGroomingDate?: string;
  estimatedDuration?: string;
  estimatedCost?: number;
}

export interface SendEstimateRequest {
  content?: string;
  estimatedDuration?: string;
  estimatedCost?: number;
  imageUrls?: string[];
}

export interface CompleteGroomingResponse {
  puppyId?: number;
  processId?: number;
  processStatus?: string;
  designerId?: number;
  threadId?: number;
  threadStep?: string;
  threadStatus?: string;
  completedTime?: string;
}

// 강아지 프로필 타입
export interface PuppyProfile {
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
}

// 견적 제안 타입
export interface EstimateProposal {
  id: number;
  style: string;
  totalGroomingBodyType: string;
  totalGroomingFaceType: string;
  detail: string;
  imageUrls: string[];
  desiredCost: number;
  desiredDateTime: string;
}

// 메인 데이터 타입
export interface EstimateAndProposalDetails {
  processId: number;
  processStatus: string;
  threadId: number;
  threadStatus: string;
  threadStep: string;
  puppyProfile: PuppyProfile;
  estimateProposal: EstimateProposal;
}

export interface GetThreadsByStepResponse {
  threads?: {
    processId?: number;
    processStatus?: string;
    processCreatedAt?: string;
    processStatusModifiedAt?: string;
    threadId?: number;
    threadStep?: string;
    threadStatus?: string;
    threadCreatedAt?: string;
    threadStepModifiedAt?: string;
    puppy?: {
      puppyId: number;
      customerId: number;
      diseases?: string[];
      name: string;
      breed: string;
      weight: number;
      sex: string;
      age: number;
      birthdate: string;
      profileImageUrl: string;
      puppySize: string;
    };
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
