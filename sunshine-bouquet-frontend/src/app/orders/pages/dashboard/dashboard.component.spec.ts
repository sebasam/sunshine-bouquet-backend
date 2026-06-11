import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { OrderService } from '../../services/order.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    const orderServiceSpy = jasmine.createSpyObj('OrderService', ['getOrders']);
    orderServiceSpy.getOrders.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [ { provide: OrderService, useValue: orderServiceSpy } ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and initialize with 0 orders', () => {
    expect(component).toBeTruthy();
    expect(component.totalOrders).toBe(0);
  });
});