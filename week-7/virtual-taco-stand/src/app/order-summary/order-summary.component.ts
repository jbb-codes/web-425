import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from '../order/order.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Order Summary</h1>
    @if (order.tacos.length > 0) {
      <ul>
        @for (taco of order.tacos; track taco; let idx = $index) {
          <li>
            <!-- I removed the @if statement to show the item numbers, since the new feature requires them -->
            <!-- I had to use Claude to find a syntax error. The starting span
            tag was missing its closing angle bracket -->
            <span class="item-label"
              ><strong>Item {{ idx + 1 }}</strong></span
            >
            <br />
            <strong>{{ taco.quantity }}x {{ taco.name }}</strong>
            <br />
            Price per taco:
            {{ taco.price | currency: 'USD' : 'symbol' : '1.2-2' }}
            <br />
            Subtotal:
            {{
              taco.price * (taco.quantity ?? 1)
                | currency: 'USD' : 'symbol' : '1.2-2'
            }}
            <br />
            @if (taco.noOnions) {
              No onions
              <br />
            }
            @if (taco.noCilantro) {
              No cilantro
              <br />
            }
            <!-- I removed the @if statement to show the remove buttons since the new feature requires them  -->
            <button (click)="removeTaco.emit(idx)">Remove Taco</button>
          </li>
        }
      </ul>
      <p>
        <strong>Total:</strong>
        {{ getTotal() | currency: 'USD' : 'symbol' : '1.2-2' }}
      </p>
    } @else {
      <p>No tacos added to the order yet.</p>
    }
  `,
  styles: `
    li {
      margin-bottom: 10px;
      padding: 5px;
    }

    .item-label {
      font-size: 0.9em;
      color: #555;
    }

    button {
      margin-top: 6px;
      padding: 4px 10px;
      cursor: pointer;
    }
  `,
})
export class OrderSummaryComponent {
  @Input() order!: Order;
  // I removed the @Input for showRemoveButtons and showItemNumbers since the new
  // feature requirement allows buttons and item numbers within the order summaries
  @Output() removeTaco = new EventEmitter<number>();

  getTotal() {
    return this.order.tacos.reduce(
      (acc, taco) => acc + taco.price * (taco.quantity ?? 1),
      0,
    );
  }
}
