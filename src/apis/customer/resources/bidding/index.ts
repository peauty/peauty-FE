import { CustomerAPI } from "../../api";
import { SendEstimateProposalResponse } from "../../../../types/customer/bidding";
import { SendEstimateProposalRequest } from "../../../../types/customer/bidding";
import { AcceptEstimateResponse } from "../../../../types/customer/bidding";
import { GetEstimateProposalDetailResponse } from "../../../../types/customer/bidding";
import { GetEstimateAndProposalDetailsResponse } from "../../../../types/customer/bidding";
import { GetOngoingProcessWithStep2ThreadsResponse } from "../../../../types/customer/bidding";
import { GetOngoingProcessWithStep1ThreadsResponse } from "../../../../types/customer/bidding";
import { GetAllStep3AboveThreadsResponse } from "../../../../types/customer/bidding";
import { GetPuppyProfilesWithCanStartProcessStatusResponse } from "../../../../types/customer/bidding";

export const initProcessWithSendEstimateProposal = async (
  userId: number,
  puppyId: number,
  data: SendEstimateProposalRequest,
): Promise<SendEstimateProposalResponse> => {
  const res = await CustomerAPI.post<SendEstimateProposalResponse>(
    `/v1/users/${userId}/puppies/${puppyId}/bidding/processes`,
    data,
  );
  return res.data;
};

export const acceptEstimate_1 = async (
  userId: number,
  puppyId: number,
  processId: number,
  threadId: number,
): Promise<AcceptEstimateResponse> => {
  const res = await CustomerAPI.patch<AcceptEstimateResponse>(
    `/v1/users/${userId}/puppies/${puppyId}/bidding/processes/${processId}/threads/${threadId}/accept`,
  );
  return res.data;
};

export const getEstimateProposalDetail = async (
  userId: number,
  puppyId: number,
  processId: number,
): Promise<GetEstimateProposalDetailResponse> => {
  const res = await CustomerAPI.get<GetEstimateProposalDetailResponse>(
    `/v1/users/${userId}/puppies/${puppyId}/bidding/processes/${processId}`,
  );
  return res.data;
};

export const getEstimateAndProposalDetails = async (
  userId: number,
  puppyId: number,
  processId: number,
  threadId: number,
): Promise<GetEstimateAndProposalDetailsResponse> => {
  const res = await CustomerAPI.get<GetEstimateAndProposalDetailsResponse>(
    `/v1/users/${userId}/puppies/${puppyId}/bidding/processes/${processId}/threads/${threadId}`,
  );
  return res.data;
};

export const getOngoingProcessWithStep2Threads = async (
  userId: number,
  puppyId: number,
): Promise<GetOngoingProcessWithStep2ThreadsResponse> => {
  const res = await CustomerAPI.get<GetOngoingProcessWithStep2ThreadsResponse>(
    `/v1/users/${userId}/puppies/${puppyId}/bidding/processes/threads/step2`,
  );
  return res.data;
};

export const getOngoingProcessWithStep1Threads = async (
  userId: number,
  puppyId: number,
): Promise<GetOngoingProcessWithStep1ThreadsResponse> => {
  const res = await CustomerAPI.get<GetOngoingProcessWithStep1ThreadsResponse>(
    `/v1/users/${userId}/puppies/${puppyId}/bidding/processes/threads/step1`,
  );
  return res.data;
};

export const getAllStep3AboveThreads = async (
  userId: number,
  puppyId: number,
): Promise<GetAllStep3AboveThreadsResponse> => {
  const res = await CustomerAPI.get<GetAllStep3AboveThreadsResponse>(
    `/v1/users/${userId}/puppies/${puppyId}/bidding/processes/threads/above-step3`,
  );
  return res.data;
};

export const getPuppyProfilesWithCanStartProcessStatus = async (
  userId: number,
): Promise<GetPuppyProfilesWithCanStartProcessStatusResponse> => {
  const res =
    await CustomerAPI.get<GetPuppyProfilesWithCanStartProcessStatusResponse>(
      `/v1/users/${userId}/puppies/with-bidding-available`,
    );
  return res.data;
};
