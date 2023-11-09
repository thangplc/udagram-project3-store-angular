# MyStore
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) 

## Setup Project
### 1. Run `npm install` to install package dependencies
### 2. Development server

    Run `ng serve` for a dev server. 
    Navigate to `http://localhost:4200/`. 

## Project Information
### 1. Routing
```ts
  {
    path: '', 
    component: ProductsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  { path: '**', redirectTo: '/' },
```
### 2. Components
- ProductsComponent (`app/components/product-list`): display the list of products
- ProductDetailComponent (`app/components/products/product-item-detail`): display the detail of a product
- CartComponent (`app/components/cart`): display the current cart information & checkout
- CheckoutComponent (`app/components/checkout`): confirm successful checkout
- ProductItemComponent (`app/components/products/product-item`): display a product item information in the product list

### 3. Models
- Product Model includes id, name, price, url (image url) and description.

  ```tsx
	export class Product {
		constructor(
			public id: number = 0,
			public name: string = '',
			public price: number = 0,
			public url: string = '',
			public description: string = ''
		) {}
	}

  ```

- OrderItem Model includes id, name, price, url (image url), description and quantity.

  ```tsx
  export class OrderItem {
		id = 0;
		name = '';
		price = 0;
		url = '';
		description = '';
		quantity = 1;
	}
  ```

- Cart Model includes order items, customer name, customer address, customer credit cart number, total amount of order and order status.

  ```tsx
  export class Cart {
    items: OrderItem[] = [];
	name = '';
	address = '';
	cardNumber = '';
	totalAmount = 0;
	isConfirmed = false;
  }
  ```

### 4. Services
- `ProductsService`: get product information.
  - `getAll()`: return a list of product.
- `CartService`: manage a cart information.
  - `getCart()`: return the current cart information.
  - `updateCart(cart: Cart)`: update the new cart information
  - `addToShoppingCart(product: Product, quantity: number)`: add the product into the cart with quantity
  - `processPayment(name: string, address: string, cardNumber: string)`: check out the cart with customer information: name, address, cardNumber
  - `resetLocalStorage()`: clear all item in the cart

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# MyStoreFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# MyStore
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.


