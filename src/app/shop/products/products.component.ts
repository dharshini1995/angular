import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products = ["shoe", "snacks" ,"dress", "diamond"]
  constructor() { }

  ngOnInit() {
  }

  giftme=function(counter){ 
    console.log("Buy me this "+this.products[counter]);
  }
 

}
