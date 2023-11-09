import { Injectable } from "@angular/core";
import { Cart, OrderItem } from "../models/cart";
import { Product } from "../models/product";

@Injectable({
  providedIn: 'root'
})
/* The CartService class manages the shopping cart functionality, including adding items, calculating
the total amount, saving to local storage, and checking out. */
export class CartService {

  constructor() {

    const cart = localStorage.getItem('cart');
    this.cart = cart ? JSON.parse(cart) : {};

  }

  cart = new Cart();



  public calculateTotalAmount(): number {
    let total = 0;

    for (const item of this.cart.items) {
      total += item.price * item.quantity;
    }

    this.cart.totalAmount = total;

    return total;
  }

  public getCart(): Cart {
    return this.cart;
  }

  public updateCart(cart: Cart): void {
    this.cart = cart;
    this.calculateTotalAmount();
    this.storeDataLocally();
  }

  public addToShoppingCart(product: Product, qty: number): void {
    let existingProduct;

    for (const item of this.cart.items) {
      if (item.id === product.id) {
        existingProduct = item;
        break;
      }
    }

    if (existingProduct !== undefined) {
      existingProduct.quantity = existingProduct.quantity + +qty;
    } else {
      const newOrderItem = new OrderItem();
      Object.assign(newOrderItem, product);
      newOrderItem.quantity = +qty;

      this.cart.items.push(newOrderItem);
    }

    this.calculateTotalAmount();
    this.storeDataLocally();
  }

  public processPayment(name: string, address: string, cardNumber: string): Cart {
    this.cart.name = name;
    this.cart.address = address;
    this.cart.cardNumber = cardNumber;
    this.cart.isConfirmed = true;

    return this.cart;
  }
  /**
     * The function saves the cart data to the local storage as a JSON string.
     */
  public storeDataLocally(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  /**
   * The clearStorage function clears the cart and saves the changes to local storage.
   */
  public resetLocalStorage(): void {
    this.cart = new Cart();
    this.storeDataLocally();
  }



}
