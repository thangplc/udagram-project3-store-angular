import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  cart: Cart = new Cart();

  /**
   * The ngOnInit function checks if the cart is confirmed and either resets the local storage or
   * navigates to the cart page.
   */
  async ngOnInit(): Promise<void> {


    this.cart = this.cartService.getCart();

    const isConfirmed = this.cart.isConfirmed;

    if (isConfirmed) {
      this.cartService.resetLocalStorage();
    } else {
      await this.router.navigate(['cart']);
    }

  }
}
