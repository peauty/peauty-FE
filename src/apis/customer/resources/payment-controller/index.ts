import { CustomerAPI } from "../../api";
import { CompletePaymentCallbackResponse } from "../../../../types/customer/payment-controller";
import { CompletePaymentCallbackRequest } from "../../../../types/customer/payment-controller";
import { CreateOrderResponse } from "../../../../types/customer/payment-controller";
import { CreateOrderRequest } from "../../../../types/customer/payment-controller";

export const completePayment = async (userId: number, threadId: number, processId: number, data: CompletePaymentCallbackRequest): Promise<CompletePaymentCallbackResponse> => {
  const res = await CustomerAPI.post<CompletePaymentCallbackResponse>(`/v1/users/${userId}/processes/${processId}/threads/${threadId}/payment`, data);
  return res.data;
};

export const saveOrder = async (userId: number, processId: number, threadId: number, data: CreateOrderRequest): Promise<CreateOrderResponse> => {
  const res = await CustomerAPI.post<CreateOrderResponse>(`/v1/users/${userId}/processes/${processId}/threads/${threadId}/order`, data);
  return res.data;
};
