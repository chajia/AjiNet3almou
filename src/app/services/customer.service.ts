import {Injectable} from '@angular/core';

import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Customer} from '../models/customer';


@Injectable()
export class CustomerService {
  options: any;

  api_path = 'http://localhost:8087/api/v1';
  headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {

  }


  // get all customers
  getAllCustomer(): Promise<Customer[]> {

    return this.http.get(this.api_path + '/customers')
      .toPromise()
      .then(response => response.json().data as Customer[])
      .catch(this.handleError);
  }

  // get by id
  getCustomerById(id: number): Promise<Customer> {
    const url = `${this.api_path}` + `/customer/` + `${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Customer)
      .catch(this.handleError);
  }

  // add customer
  addCustomer(customer: Customer) {
    const body = JSON.stringify(customer);
    const options = new RequestOptions({headers: this.headers});
    return this.http.post(this.api_path + '/customer', body, options);

  }


  // mise a jours
  updateCustomer(customer: Customer): Promise<Customer> {
    const url = `${this.api_path}` + `/customer/` + `${customer.id_Custumer}`;
    const options = new RequestOptions({headers: this.headers});
    return this.http
      .put(url, JSON.stringify(customer), {headers: this.headers})
      .toPromise()
      .then(() => customer)
      .catch(this.handleError);
  }


  //delete customer
  deleteCustomer(customer: Customer): Promise<void> {
    const url = `${this.api_path}` + `/customer/` + `${customer.id_Custumer}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
