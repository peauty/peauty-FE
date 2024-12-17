

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

export interface GetEstimateAndProposalDetailsResponse {
  processId?: number;
  processStatus?: string;
  threadId?: number;
  threadStatus?: string;
  threadStep?: string;
  puppyProfile?: {
  threadId?: number;
  estimateId?: number;
  content?: string;
  availableGroomingDate?: string;
  estimatedDuration?: string;
  estimatedCost?: number;
  depositPrice?: number;
  imageUrls?: string[];
};
  estimateProposal?: Profile;
  estimate?: Profile;
}

export interface Profile {
  threadId?: number;
  estimateId?: number;
  content?: string;
  availableGroomingDate?: string;
  estimatedDuration?: string;
  estimatedCost?: number;
  depositPrice?: number;
  imageUrls?: string[];
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

export interface Thread {
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
