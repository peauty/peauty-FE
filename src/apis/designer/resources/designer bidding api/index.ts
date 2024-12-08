import { DesignerAPI } from "../../api";
import { SendEstimateResponse } from "../../../../types/designer/designer bidding api";
import { SendEstimateRequest } from "../../../../types/designer/designer bidding api";
import { CompleteGroomingResponse } from "../../../../types/designer/designer bidding api";

export const sendEstimate = async (userId: number, processId: number, threadId: number, data: SendEstimateRequest): Promise<SendEstimateResponse> => {
  const res = await DesignerAPI.post<SendEstimateResponse>(`/v1/users/${userId}/bidding/processes/${processId}/threads/${threadId}/send`, data);
  return res.data;
};

export const completeGrooming = async (userId: number, processId: number, threadId: number): Promise<CompleteGroomingResponse> => {
  const res = await DesignerAPI.post<CompleteGroomingResponse>(`/v1/users/${userId}/bidding/processes/${processId}/threads/${threadId}/complete`);
  return res.data;
};
