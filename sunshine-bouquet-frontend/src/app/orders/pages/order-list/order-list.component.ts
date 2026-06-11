import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  standalone: false
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getOrders().subscribe({
      next: (data) => this.orders = data
    });
  }

  updateStatus(id: string, currentStatus: string): void {
    let newStatus = '';
    if (currentStatus === 'CREATED') newStatus = 'IN_TRANSIT';
    else if (currentStatus === 'IN_TRANSIT') newStatus = 'DELIVERED';

    if (newStatus) {
      this.orderService.updateStatus(id, newStatus).subscribe({
        next: () => this.loadOrders()
      });
    }
  }

  cancelOrder(id: string): void {
    this.orderService.updateStatus(id, 'CANCELLED').subscribe({
      next: () => this.loadOrders()
    });
  }
}