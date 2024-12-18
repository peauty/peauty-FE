import { CustomerAPI } from "../../api";
import { CompletePaymentCallbackResponse } from "../../../../types/customer/payment";
import { CompletePaymentCallbackRequest } from "../../../../types/customer/payment";
import { CreateOrderResponse } from "../../../../types/customer/payment";
import { CreateOrderRequest } from "../../../../types/customer/payment";

export const acceptEstimate = async (userId: number, puppyId: number, processId: number, threadId: number, data: CompletePaymentCallbackRequest): Promise<CompletePaymentCallbackResponse> => {
  const res = await CustomerAPI.post<CompletePaymentCallbackResponse>(`/v1/users/${userId}/puppies/${puppyId}/processes/${processId}/threads/${threadId}/payment`, data);
  return res.data;
};

export const saveOrder = async (userId: number, puppyId: number, processId: number, threadId: number, data: CreateOrderRequest): Promise<CreateOrderResponse> => {
  const res = await CustomerAPI.post<CreateOrderResponse>(`/v1/users/${userId}/puppies/${puppyId}/processes/${processId}/threads/${threadId}/order`, data);
  return res.data;
};
