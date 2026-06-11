import { gql } from 'apollo-angular';

export const GET_ORDERS = gql`
  query GetOrders {
    orders {
      id
      customerStore
      originCountry
      destinationCity
      bouquetQuantity
      status
      createdAt
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation CreateOrder($customerStore: String!, $originCountry: String!, $destinationCity: String!, $bouquetQuantity: Int!) {
    createOrder(
      customerStore: $customerStore
      originCountry: $originCountry
      destinationCity: $destinationCity
      bouquetQuantity: $bouquetQuantity
    ) {
      id
      status
    }
  }
`;

export const UPDATE_ORDER_STATUS = gql`
  mutation UpdateOrderStatus($id: UUID!, $newStatus: OrderStatus!) {
    updateOrderStatus(id: $id, newStatus: $newStatus) {
      id
      status
    }
  }
`;