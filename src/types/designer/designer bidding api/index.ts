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

// Puppy 객체 타입
interface Puppy {
  puppyId: number;
  customerId: number;
  name: string;
  breed: string;
  weight: number;
  sex: string;
  age: number;
  birthdate: string;
  profileImageUrl: string;
  puppySize: "중형견" | "소형견" | "대형견"; // 대형견 등의 다른 값이 있을 수 있음
}

// Thread 객체 타입
interface Thread {
  processId: number;
  processStatus: string;
  processCreatedAt: string;
  processStatusModifiedAt: string;
  threadId: number;
  threadStep: string;
  threadStatus: string;
  threadCreatedAt: string;
  threadStepModifiedAt: string;
  puppy: Puppy; // 위에서 정의한 Puppy 타입을 사용
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
