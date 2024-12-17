import { DesignerAPI } from "../../api";
import { SendEstimateResponse } from "../../../../types/designer/designer-bidding-api";
import { SendEstimateRequest } from "../../../../types/designer/designer-bidding-api";
import { CompleteGroomingResponse } from "../../../../types/designer/designer-bidding-api";
import { GetEstimateAndProposalDetailsResponse } from "../../../../types/designer/designer-bidding-api";
import { GetThreadsByStepResponse } from "../../../../types/designer/designer-bidding-api";

export const sendEstimate = async (
  userId: number,
  processId: number,
  threadId: number,
  data: SendEstimateRequest,
): Promise<SendEstimateResponse> => {
  const res = await DesignerAPI.post<SendEstimateResponse>(
    `/v1/users/${userId}/bidding/processes/${processId}/threads/${threadId}/send`,
    data,
  );
  return res.data;
};

export const completeGrooming = async (
  userId: number,
  processId: number,
  threadId: number,
): Promise<CompleteGroomingResponse> => {
  const res = await DesignerAPI.post<CompleteGroomingResponse>(
    `/v1/users/${userId}/bidding/processes/${processId}/threads/${threadId}/complete`,
  );
  return res.data;
};

export const getEstimateAndProposalDetails = async (
  userId: number,
  processId: number,
  threadId: number,
): Promise<GetEstimateAndProposalDetailsResponse> => {
  const res = await DesignerAPI.get<GetEstimateAndProposalDetailsResponse>(
    `/v1/users/${userId}/bidding/processes/${processId}/threads/${threadId}`,
  );
  return res.data;
};

export const getStep2Threads = async (
  userId: number,
): Promise<GetThreadsByStepResponse> => {
  const res = await DesignerAPI.get<GetThreadsByStepResponse>(
    `/v1/users/${userId}/bidding/processes/threads/step2`,
  );
  return res.data;
};

export const getStep1Threads = async (
  userId: number,
): Promise<GetThreadsByStepResponse> => {
  const res = await DesignerAPI.get<GetThreadsByStepResponse>(
    `/v1/users/${userId}/bidding/processes/threads/step1`,
  );
  return res.data;
};

export const getStep3AboveThreads = async (
  userId: number,
): Promise<GetThreadsByStepResponse> => {
  const res = await DesignerAPI.get<GetThreadsByStepResponse>(
    `/v1/users/${userId}/bidding/processes/threads/above-step3`,
  );
  return res.data;
};
