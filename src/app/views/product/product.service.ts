import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  baseurl = 'https://d807e310.ngrok.io/';

  getAllProduct() {
    return this.http.get<Product[]>(this.baseurl + 'products');
  }

  getProductById(_id) {
    return this.http.get<Product[]>(this.baseurl + 'products' + '/' + _id);
  }

  addProduct(products: object) {
    return this.http.post(this.baseurl + 'products', products);
  }

  updateProduct(products: object) {
    // @ts-ignore
    return this.http.put(this.baseurl + 'products' + '/' + products._id, products);
  }

  deleteProduct(products: object) {
    // @ts-ignore
    return this.http.delete(this.baseurl + 'products' + '/' + products._id);
  }
}
