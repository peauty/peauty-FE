import { CustomerAPI } from "../../api";
import { CompletePaymentResponse } from "../../../../types/customer/payment-controller";
import { CompletePaymentRequest } from "../../../../types/customer/payment-controller";
import { OrderResponse } from "../../../../types/customer/payment-controller";
import { OrderRequest } from "../../../../types/customer/payment-controller";

export const completePayment = async (userId: number, threadId: number, processId: number, data: CompletePaymentRequest): Promise<CompletePaymentResponse> => {
  const res = await CustomerAPI.post<CompletePaymentResponse>(`/v1/users/${userId}/processes/${processId}/threads/${threadId}/payment`, data);
  return res.data;
};

export const saveOrder = async (userId: number, threadId: number, processId: number, data: OrderRequest): Promise<OrderResponse> => {
  const res = await CustomerAPI.post<OrderResponse>(`/v1/users/${userId}/processes/${processId}/threads/${threadId}/order`, data);
  return res.data;
};
