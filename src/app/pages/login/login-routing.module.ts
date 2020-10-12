import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabnavPage } from 'src/app/tabnav/tabnav.page';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  },
  { path: 'tabs', redirectTo: 'tabnav', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
