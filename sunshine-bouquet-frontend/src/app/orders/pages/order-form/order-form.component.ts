import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  standalone: false
})
export class OrderFormComponent {
  orderForm: FormGroup;
  isSubmitting = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private router: Router
  ) {
    this.orderForm = this.fb.group({
      customerStore: ['', Validators.required],
      originCountry: ['', Validators.required],
      destinationCity: ['', Validators.required],
      bouquetQuantity: [1, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.orderForm.invalid) return;

    this.isSubmitting = true;
    this.errorMessage = '';
    const { customerStore, originCountry, destinationCity, bouquetQuantity } = this.orderForm.value;

    this.orderService.createOrder(customerStore, originCountry, destinationCity, bouquetQuantity)
      .subscribe({
        next: () => {
          this.isSubmitting = false;
          this.router.navigate(['/orders/list']);
        },
        error: () => {
          this.isSubmitting = false;
          this.errorMessage = 'Error al crear la orden. Verifique la conexión con el servidor.';
        }
      });
  }
}