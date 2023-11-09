import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart, OrderItem } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
/* The CartComponent class is responsible for managing the cart, handling form validation, updating the
cart items, and processing payment. */
export class CartComponent {
  constructor(
    private router: Router,
    private formB: FormBuilder,
    private cartService: CartService
  ) {
    this.form = formB.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(6)]],
      cardNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{16}$')],
      ],
    });
  }
  carts: Cart = new Cart();

  form: FormGroup = new FormGroup({});

  guestName: string = '';
  guestAddress: string = '';
  creditCardNumber: string = '';

  /**
   * The function returns the controls of a form.
   * @returns the controls of the form.
   */
  get f() {
    return this.form.controls;
  }

  /**
   * The ngOnInit function initializes the carts variable by calling the getCart function from the
   * cartService.
   */
  ngOnInit(): void {
    this.carts = this.cartService.getCart();
  }

  /**
   * The onChange function updates the cart items based on the given id and quantity, and displays an
   * alert if the quantity is zero.
   * @param {number} id - The "id" parameter is a number that represents the identifier of a product or
   * item in the cart.
   * @param {number} qty - The `qty` parameter represents the quantity of a product. It is used to
   * determine if the product should be removed from the cart or updated with a new quantity.
   */
  onChange(id: number, qty: number): void {
    this.carts.items = this.carts.items.filter(
      (item: OrderItem) => item.quantity > 0
    );

    if (qty == 0) {
      alert('Removed the product');
    }

    this.cartService.updateCart(this.carts);
  }

  /**
   * The onSubmit function processes a payment using the customer's name, address, and credit card
   * number, and then navigates to the payment page.
   */
  async onSubmit(): Promise<void> {
    this.cartService.processPayment(
      this.guestName,
      this.guestAddress,
      this.creditCardNumber
    );
    await this.router.navigate(['checkout']);
  }
}
