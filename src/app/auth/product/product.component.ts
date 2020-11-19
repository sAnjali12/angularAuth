import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private http: Http, private router: Router) { }
  confirmationString:string = "New product has been added";
  isAdded: boolean = false;
  productObj:object = {};

  addNewProduct = function(product) {
    this.productObj = {
      "name": product.name,
      "color": product.color
    }
    console.log(this.productObj )
    this.http.post("http://localhost:5555/products/", this.productObj).subscribe((res:Response) => {
      this.isAdded = true;
      this.router.navigate(['/home']);

    })


  }
  ngOnInit() {
  }

}
