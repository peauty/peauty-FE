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
