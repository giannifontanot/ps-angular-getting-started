import {Component, OnInit} from '@angular/core';
import {IProduct} from './IProduct';
import {filter} from "rxjs/operators";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})

export class ProductListComponent implements OnInit {
  showImage: boolean = false;
  pageTitle: string = 'Product List! ';
  imageWidth: number = 50;
  imageMargin: number = 2;

  private _listFilterx: string = "";

  get listFilter(): string {
    return this._listFilterx;
  }

  set listFilter(value: string) {
    console.log(value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2021",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png"
    }];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(keyword: string): IProduct[] {
    keyword = keyword.toLocaleLowerCase()
    return this.products.filter((oneProduct: IProduct) => oneProduct.productName.toLocaleLowerCase().includes(keyword));
    // return this.products.filter((oneProduct: IProduct) => {return true;});
  }


  ngOnInit(): void {
    this._listFilterx = 'Hammer';
  }
}
