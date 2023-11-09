import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OrderItem } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  constructor(
    private cartService: CartService,
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  product: Product = new Product();

  qty: number = 1;
  options: number[] = Array.from({length: 10}, (_, i) => i + 1);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = parseInt(params['id'], 10); // Chuyển đổi sang số nguyên
      this.getProductById(id);
    });
  }
  /**
   * The function retrieves a product by its ID from a product service and assigns it to a variable.
   * @param {number} id - The `id` parameter is a number that represents the unique identifier of a
   * product.
   */
  private getProductById(id: number): void {
    this.productService.getAll().subscribe((res: Product[]) => {
      this.product = res.find((item: Product) => item.id === id) ?? new Product();
    });
  }
  /**
   * The addToCart function adds a product to the shopping cart and displays a success message.
   */
  public addToCart(): void {
    this.cartService.addToShoppingCart(this.product, this.qty);
    alert('Add to cart successfully !!!');
  }
}
