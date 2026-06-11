import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { GET_ORDERS, CREATE_ORDER, UPDATE_ORDER_STATUS } from './graphql.operations';
import { Order, GetOrdersResponse, CreateOrderResponse, UpdateOrderStatusResponse } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private apollo: Apollo) {}

  getOrders(): Observable<Order[]> {
    return this.apollo.watchQuery<GetOrdersResponse>({
      query: GET_ORDERS,
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(
      map(result => (result.data?.orders as Order[]) ?? [])
    );
  }

  createOrder(customerStore: string, originCountry: string, destinationCity: string, bouquetQuantity: number): Observable<Order | null | undefined> {
    return this.apollo.mutate<CreateOrderResponse>({
      mutation: CREATE_ORDER,
      variables: { customerStore, originCountry, destinationCity, bouquetQuantity }
    }).pipe(
      map(result => result.data?.createOrder)
    );
  }

  updateStatus(id: string, newStatus: string): Observable<Order | null | undefined> {
    return this.apollo.mutate<UpdateOrderStatusResponse>({
      mutation: UPDATE_ORDER_STATUS,
      variables: { id, newStatus }
    }).pipe(
      map(result => result.data?.updateOrderStatus)
    );
  }
}