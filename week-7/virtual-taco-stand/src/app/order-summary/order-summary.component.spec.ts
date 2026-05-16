import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryComponent } from './order-summary.component';
import { CommonModule } from '@angular/common';
import { Order } from '../order/order.component';

describe('OrderSummaryComponent', () => {
  let component: OrderSummaryComponent;
  let fixture: ComponentFixture<OrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderSummaryComponent, CommonModule, OrderSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderSummaryComponent);
    component = fixture.componentInstance;

    const mockOrder = {
      orderId: 999,
      tacos: [
        { id: 3, name: 'Al Pastor', price: 2.5, quantity: 2 },
        { id: 1, name: 'Carnitas', price: 3, quantity: 1, noOnions: true },
      ],
    };

    component.order = mockOrder;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate total price correctly', () => {
    const mockOrder: Order = {
      orderId: 1000,
      tacos: [
        { id: 1, name: 'Carnitas', price: 3, quantity: 2 },
        { id: 3, name: 'Al Pastor', price: 2.5, quantity: 1 },
      ],
    };

    component.order = mockOrder;
    expect(component.getTotal()).toEqual(8.5);
  });

  it('should display message for empty order', () => {
    component.order = { orderId: 1001, tacos: [] };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(
      'No tacos added to the order yet.',
    );
  });

  it('should display details for each taco in the order', () => {
    const mockOrder: Order = {
      orderId: 1002,
      tacos: [
        { id: 1, name: 'Carnitas', price: 3, quantity: 2 },
        { id: 3, name: 'Al Pastor', price: 2.5, quantity: 1 },
      ],
    };

    component.order = mockOrder;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('li').textContent).toContain('2x Carnitas');
    expect(compiled.querySelector('li').textContent).toContain(
      'Price per taco: $3.00',
    );
  });

  it('should calculate the total using taco quantity values', () => {
    component.order = {
      orderId: 2001,
      tacos: [
        { id: 1, name: 'Carnitas Taco', price: 3.25, quantity: 2 },
        { id: 2, name: 'Queso Birria Taco', price: 3.5, quantity: 3 },
      ],
    };

    expect(component.getTotal()).toBe(17.0);
  });

  it('should render the first taco using the expected summary label format', () => {
    component.order = {
      orderId: 2002,
      tacos: [{ id: 1, name: 'Carnitas Taco', price: 3.25, quantity: 2 }],
    };

    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const firstItem = compiled.querySelector('li');

    expect(firstItem.textContent).toContain('2x Carnitas Taco');
  });

  /**
   * LEGACY CONTRACT TEST - DO NOT MODIFY
   * Existing clients depend on quantity-first summary text.
   */
  it('LEGACY CONTRACT: keeps quantity-first formatting for list items', () => {
    component.order = {
      orderId: 3001,
      tacos: [{ id: 1, name: 'Carnitas Taco', price: 3.25, quantity: 2 }],
    };

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const firstItem = compiled.querySelector('li');

    expect(firstItem?.textContent).toContain('2x Carnitas Taco');
  });

  /**
   * LEGACY CONTRACT TEST - DO NOT MODIFY
   * Price copy is treated as stable wording for existing UI snapshots.
   */
  it('LEGACY CONTRACT: preserves the exact price label wording', () => {
    component.order = {
      orderId: 3002,
      tacos: [{ id: 1, name: 'Carnitas Taco', price: 3.25, quantity: 1 }],
    };

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('li')?.textContent).toContain(
      'Price per taco: $3.25',
    );
  });

  // This test has been updated since the new feature requires that summary rows show a remove button
  // I did use Claude to help me work through updating the contract as well as the components accordingly
  /**
   * LEGACY CONTRACT TEST - DO NOT MODIFY
   * Summary rows should include action controls.
   */
  it('LEGACY CONTRACT: renders inline remove actions in summary rows', () => {
    component.order = {
      orderId: 3003,
      tacos: [{ id: 1, name: 'Carnitas Taco', price: 3.25, quantity: 1 }],
    };

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = Array.from(
      compiled.querySelectorAll('button'),
    ) as HTMLElement[];

    expect(buttons.length).toBe(1);
    expect(buttons[0].textContent).toBe('Remove Taco');
  });

  // This test has been updated to verify that order summaries contain generated item number prefixes.
  // I used Claude to help me work through updating the components according to the contract changes
  /**
   * LEGACY CONTRACT TEST - DO NOT MODIFY
   * Summary labels include generated "Item n" prefixes.
   */
  it('LEGACY CONTRACT: should contain generated item identifier prefixes', () => {
    component.order = {
      orderId: 3004,
      tacos: [
        { id: 1, name: 'Carnitas Taco', price: 3.25, quantity: 1 },
        { id: 2, name: 'Queso Birria Taco', price: 3.5, quantity: 1 },
      ],
    };

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const listText = compiled.querySelector('ul')?.textContent ?? '';

    expect(listText).toContain('Item 1');
    expect(listText).toContain('Item 2');
  });
});
