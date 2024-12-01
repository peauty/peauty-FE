import { CustomerAPI } from "../../api";
import { PuppyDetailResponse } from "../../../types/puppy";
import { UpdatePuppyResponse } from "../../../types/puppy";
import { UpdatePuppyRequest } from "../../../types/puppy";
import { DeletePuppyResponse } from "../../../types/puppy";
import { AddPuppyRequest } from "../../../types/puppy";

export const getPuppyDetail = async (userId: number, puppyId: number): Promise<PuppyDetailResponse> => {
  const res = await CustomerAPI.get<PuppyDetailResponse>(`/v1/users/${userId}/puppies/${puppyId}`);
  return res.data;
};

export const updatePuppy = async (userId: number, puppyId: number, data: UpdatePuppyRequest): Promise<UpdatePuppyResponse> => {
  const res = await CustomerAPI.put<UpdatePuppyResponse>(`/v1/users/${userId}/puppies/${puppyId}`, data);
  return res.data;
};

export const deletePuppy = async (userId: number, puppyId: number): Promise<DeletePuppyResponse> => {
  const res = await CustomerAPI.delete<DeletePuppyResponse>(`/v1/users/${userId}/puppies/${puppyId}`);
  return res.data;
};

export const registerPuppy = async (userId: number, data: AddPuppyRequest): Promise<PuppyDetailResponse> => {
  const res = await CustomerAPI.post<PuppyDetailResponse>(`/v1/users/${userId}/puppies`, data);
  return res.data;
};
