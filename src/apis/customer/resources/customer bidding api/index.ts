import { CustomerAPI } from "../../api";
import { SendEstimateProposalResponse } from "../../../../types/customer/customer bidding api";
import { SendEstimateProposalRequest } from "../../../../types/customer/customer bidding api";
import { AcceptEstimateResponse } from "../../../../types/customer/customer bidding api";
import { GetEstimateAndProposalDetailsResponse } from "../../../../types/customer/customer bidding api";

export const initProcessWithSendEstimateProposal = async (userId: number, puppyId: number, data: SendEstimateProposalRequest): Promise<SendEstimateProposalResponse> => {
  const res = await CustomerAPI.post<SendEstimateProposalResponse>(`/v1/users/${userId}/puppies/${puppyId}/biddings`, data);
  return res.data;
};

export const acceptEstimate = async (userId: number, puppyId: number, processId: number, threadId: number): Promise<AcceptEstimateResponse> => {
  const res = await CustomerAPI.post<AcceptEstimateResponse>(`/v1/users/${userId}/puppies/${puppyId}/bidding/processes/${processId}/threads/${threadId}/accept`);
  return res.data;
};

export const getEstimateAndProposalDetails = async (userId: number, puppyId: number, processId: number, threadId: number): Promise<GetEstimateAndProposalDetailsResponse> => {
  const res = await CustomerAPI.get<GetEstimateAndProposalDetailsResponse>(`/v1/users/${userId}/puppies/${puppyId}/bidding/processes/${processId}/threads/${threadId}`);
  return res.data;
};
