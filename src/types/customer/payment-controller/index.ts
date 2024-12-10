export interface CompletePaymentResponse {

}

export interface CompletePaymentRequest {

}

export interface OrderResponse {
  orderId?: number;
  cost?: number;
  uuid?: string;
  paymentStatus?: boolean;
}

export interface OrderRequest {
  cost?: number;
}
