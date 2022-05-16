import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'Mobile',
    },
    {
      id: 2,
      name: 'Laptop',
    },
    {
      id: 3,
      name: 'Tv',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit() {}
  public getProduct(url, id) {
    this.router.navigate([url, id]);
  }
}
