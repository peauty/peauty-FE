export interface SendEstimateProposalResponse {
  processId?: number;
  puppyId?: number;
  designerIds?: number[];
  processStatus?: string;
  createdAt?: string;
}

export interface SendEstimateProposalRequest {
  designerIds?: number[];
  groomingType?: 'TOTAL' | 'CLEAN';
  detail?: string;
  imageUrls?: string[];
  desiredCost?: number;
  desiredDateTime?: string;
  totalGroomingBodyType?: 'CLIPPING_3MM' | 'CLIPPING_6MM' | 'CLIPPING_9MM' | 'SUMMER_SPORTING_3MM' | 'SUMMER_SPORTING_6MM' | 'SUMMER_SPORTING_9MM' | 'SUMMER_PANTALONG_3MM' | 'SUMMER_PANTALONG_6MM' | 'SUMMER_PANTALONG_9MM' | 'SUMMER_BELL_3MM' | 'SUMMER_BELL_6MM' | 'SUMMER_BELL_9MM';
  totalGroomingFaceType?: 'EGG' | 'BABY' | 'GODDESS' | 'BEAR' | 'SEAL' | 'LION' | 'CROWN' | 'TEDDY_BEAR' | 'CANDY' | 'BROCCOLI' | 'HIGH_BAR' | 'POINTED_EARS' | 'MONKEY' | 'BEDLINGTON' | 'POODLINGTON';
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

export interface GetEstimateAndProposalDetailsResponse {
  processId?: number;
  processStatus?: string;
  threadId?: number;
  threadStatus?: string;
  threadStep?: string;
  puppyProfile?: Profile;
  estimateProposal?: Profile;
  estimate?: Profile;
}
