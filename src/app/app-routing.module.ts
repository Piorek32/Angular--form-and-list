import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from "./form/form.component"
import { ProductsComponent } from "./products/products.component"

const routes: Routes = [

  { path: 'products',
   component: ProductsComponent },
  { path: 'form',
   component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
