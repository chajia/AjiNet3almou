import {Component, OnInit} from '@angular/core';
import {Customer} from '../models/customer';

@Component({
  selector: 'app-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.css']
})
export class AppContentComponent implements OnInit {

  customer: Customer = new Customer(12, 'bilal', 'chajia', '0001457', '@chajiamail', 'azilal', 17);
  constructor() { }

  ngOnInit() {
  }

}
