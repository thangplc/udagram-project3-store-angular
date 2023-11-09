import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) {
  }

  products: Product[] = [];
  url: string = '../../assets/data.json';

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
