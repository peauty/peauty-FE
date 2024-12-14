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

// 전체 응답 데이터 타입
export interface GetEstimateAndProposalDetailsResponse {
  threads: Thread[]; // 여러 개의 Thread를 배열로 담고 있음
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
