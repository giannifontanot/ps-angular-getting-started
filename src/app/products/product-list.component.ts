import {Component, OnInit} from '@angular/core';
import {IProduct} from './IProduct';
import {ProductService} from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})

export class ProductListComponent implements OnInit {
  showImage: boolean = false;
  pageTitle: string = 'Product List! ';
  imageWidth: number = 50;
  imageMargin: number = 2;
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  private _listFilterx: string = "";

  constructor(private productService: ProductService) {
  }

  get listFilter(): string {
    return this._listFilterx;
  }

  set listFilter(value: string) {
    console.log(value);
    this.filteredProducts = this.performFilter(value);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(keyword: string): IProduct[] {
    keyword = keyword.toLocaleLowerCase()
    return this.products.filter((oneProduct: IProduct) => oneProduct.productName.toLocaleLowerCase().includes(keyword));
  }


  ngOnInit(): void {
    this.products = this.productService.getPoducts()
    this.filteredProducts = this.products;
    // this._listFilterx = 'Hammer';
  }

  onNotify($event: any): void {
    this.pageTitle = $event;
  }
}
