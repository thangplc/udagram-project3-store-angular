import { Component } from '@angular/core';
import { OrderItem } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductsComponent {
  constructor(
    private cartService: CartService,
    private productService: ProductsService
  ) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.loadProducts();
  }
  /**
   * The function "loadProducts" retrieves all products from the productService and assigns the result
   * to the "products" variable.
   */
  private loadProducts(): void {
    this.productService.getAll().subscribe((res: Product[]) => {
      this.products = res;
    });
  }
  /**
   * The function "addedProduct" creates a new Product object based on the given OrderItem and adds it
   * to the shopping cart with the specified quantity.
   * @param {OrderItem} orderItem - The `orderItem` parameter is an object of type `OrderItem`. It
   * contains the information about a product that is being added to the shopping cart. The properties
   * of the `orderItem` object are:
   */
  public addedProduct(orderItem: OrderItem): void {
    const product = new Product();
    product.id = orderItem.id;
    product.name = orderItem.name;
    product.price = orderItem.price;
    product.url = orderItem.url;
    product.description = orderItem.description;
    this.cartService.addToShoppingCart(product, +orderItem.quantity);
  }
}
