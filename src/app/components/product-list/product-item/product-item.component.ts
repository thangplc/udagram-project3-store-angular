import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderItem } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductComponent {

  @Input() product: Product = new Product();
  @Output() addedProduct: EventEmitter<OrderItem> = new EventEmitter();

  qty: number = 1;
  // options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  options: number[] = Array.from({length: 10}, (_, i) => i + 1);


  /**
   * The addToCart function creates an OrderItem object with the product details and emits an event
   * with the added product, then logs a success message.
   */
  public addToCart(): void {
    const orderItem = new OrderItem();
    orderItem.id = this.product.id || 1;
    orderItem.name = this.product.name || '';
    orderItem.price = this.product.price || 0;
    orderItem.url = this.product.url || '';
    orderItem.description = this.product.description || '';
    orderItem.quantity = +this.qty || 0;

    this.addedProduct.emit(orderItem);
    alert('Add product to cart successfully !!!');
  }
}
