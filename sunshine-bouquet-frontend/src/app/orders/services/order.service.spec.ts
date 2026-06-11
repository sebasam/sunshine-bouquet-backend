import { TestBed } from '@angular/core/testing';
import { OrderService } from './order.service';
import { Apollo } from 'apollo-angular';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    // Evitamos el error de "No provider for Apollo" inyectando un Mock de Apollo
    const apolloSpy = jasmine.createSpyObj('Apollo', ['watchQuery', 'mutate']);

    TestBed.configureTestingModule({
      providers: [
        OrderService,
        { provide: Apollo, useValue: apolloSpy }
      ]
    });
    service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});