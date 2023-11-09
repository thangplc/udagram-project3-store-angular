export class Cart {
  items: OrderItem[] = [];
  name = '';
  address = '';
  cardNumber = '';
  totalAmount = 0;
  isConfirmed = false;
}

export class OrderItem {
  id = 0;
  name = '';
  price = 0;
  url = '';
  description = '';
  quantity = 1;
}
