import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartPage } from '../pages/cart/cart.page';
import { HomePage } from '../pages/home/home.page';
import { ProductPage } from '../pages/product/product.page';
import { SettingPage } from '../pages/setting/setting.page';

import { TabnavPage } from './tabnav.page';

const routes: Routes = [
  {
    path: '',
    component: TabnavPage,
    children:[
      {
        path: 'home',
        children: [{
          path:'',
          component:HomePage
        }]
      },
      {
        path: 'cart',
        children: [{
          path:'',
          component:CartPage
        }]
      },
      {
        path: 'product',
        children: [{
          path:'',
          component:ProductPage
        }]
      },
      {
        path: 'setting',
        children: [{
          path:'',
          component:SettingPage
        }]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
      
    ]},
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabnavPageRoutingModule {}
