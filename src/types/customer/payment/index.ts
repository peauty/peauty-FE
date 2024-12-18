export type PaymentStatusType = 'COMPLETED' | 'READY' | 'CANCELLED' | 'ERROR';



export interface CompletePaymentCallbackResponse {
  shopName?: string;
  orderId?: number;
  depositPrice?: number;
  actualPrice?: number;
  paymentDate?: string;
  paymentStatus?: PaymentStatusType;
}

export interface CompletePaymentCallbackRequest {
  orderId?: number;
  depositPrice?: number;
  paymentUuid?: string;
}

export interface CreateOrderResponse {
  orderId?: number;
  depositPrice?: number;
  uuid?: string;
  paymentStatus?: PaymentStatusType;
}

export interface CreateOrderRequest {
  price?: number;
  depositPrice?: number;
}
