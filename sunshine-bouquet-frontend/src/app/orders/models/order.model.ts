export interface Order {
  id: string;
  customerStore: string;
  originCountry: string;
  destinationCity: string;
  bouquetQuantity: number;
  status: string;
  createdAt: string;
}

export interface GetOrdersResponse {
  orders: Order[];
}

export interface CreateOrderResponse {
  createOrder: Order;
}

export interface UpdateOrderStatusResponse {
  updateOrderStatus: Order;
}