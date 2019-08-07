import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
form: FormGroup;
  constructor(
    
  ) {

    this.form = new FormGroup({
      name: new FormControl({ value: '', disabled: false }),
      img: new FormControl({ value: '', disabled: false }),
      category: new FormControl({ value: '', disabled: false }),
      price: new FormControl({ value: '', disabled: false }),
      discription: new FormControl({ value: '', disabled: false }),
  });
   }
   saveForm() {
     let formResult = {
       name :  this.form.controls['name'].value,
       img :  this.form.controls['img'].value,
       category :  this.form.controls['category'].value,
       price :  this.form.controls['price'].value,
       discription :  this.form.controls['discription'].value
     }
     localStorage.setItem("formresult", JSON.stringify(formResult));
   }

  ngOnInit() {
  }

}
