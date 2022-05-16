import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  id: any;
  constructor(private childRoute: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
  }
  gotoOverview(url, id, cmp) {
    this.childRoute.navigate([url, id, cmp]);
  }
}
