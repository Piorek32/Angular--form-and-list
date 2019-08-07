import { Component, OnInit } from '@angular/core';
import { Product, Categories } from '../dataModel/dataModels'
import { FormGroup, FormControl } from '@angular/forms';
import { ProductsData } from "../productsData"


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  form: FormGroup;
  searchTerm: string = '';
  filteredTab: Product[];
  categories = Object.keys(Categories);
  currentCategory: Categories = Categories.All;
  page = 1;
  comment: string;
  showInputComment: boolean = false;
  currentProduct: Product;



  products: Product[] = ProductsData;

  constructor(

  ) { }


  sortByName() {
    let sortedTab = this.filteredTab.sort((a: Product, b: Product) => {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  removeItem(product) {
    let newTab = this.filteredTab.filter(val => {
      return val.name !== product.name;
    })
    this.products = newTab;
    this.filteredTab = newTab;
  }
  filterItems() {
    if (this.currentCategory === Categories.All) {
      return this.products.filter(val => {
        return val.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      });
    }
    return this.products.filter(val => {
      return val.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 &&
        val.category === this.currentCategory;
    });
  }

  searchItem() {
    this.filteredTab = this.filterItems();
  }
  changeCategories(event) {
    this.currentCategory = event;
    let newTab;
    if (this.currentCategory === Categories.All) {
      newTab = this.products;

    } else {
      newTab = this.products.filter(val => {
        return val.category === event && val.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      });
    }
    this.filteredTab = newTab;
  }
  pageForward() {
    if (this.page < 2) {
      this.page += 1;
    }
  }
  pageBack() {
    if (this.page > 1) {
      this.page -= 1;
    }
  }
  edit(product: Product) {
    this.currentProduct = product;
    this.form = new FormGroup({
      name: new FormControl(product.name),
    });
  }
  cancel() {
    this.form = null;
  }
  save() {

    let index = this.filteredTab.findIndex(val => val.name === this.currentProduct.name);
    let name = this.form.value.name;
    this.filteredTab[index].name = name;
  }

  apply() {
    this.currentProduct.comment.push(this.comment);

    this.filteredTab.forEach(val => {
      if (val.name === this.currentProduct.name) {
        val = this.currentProduct;
      }
    });

    this.showInputComment = false;
  }
  addComment(product) {
    this.showInputComment = true;
    this.currentProduct = product;



  }


  ngOnInit() {
    this.searchItem();
  }

}
