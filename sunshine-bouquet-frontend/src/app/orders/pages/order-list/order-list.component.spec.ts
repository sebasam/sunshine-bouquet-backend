import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderListComponent } from './order-list.component';
import { OrderService } from '../../services/order.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;

  beforeEach(async () => {
    // Creamos un Mock del servicio para no llamar a GraphQL en la prueba
    const orderServiceSpy = jasmine.createSpyObj('OrderService', ['getOrders', 'updateStatus']);
    orderServiceSpy.getOrders.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ OrderListComponent ],
      providers: [ { provide: OrderService, useValue: orderServiceSpy } ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});