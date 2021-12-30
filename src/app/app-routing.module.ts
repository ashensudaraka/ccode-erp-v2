import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'item', component: ItemComponent },
      { path: 'client', component: ClientComponent },
      { path: 'service', component: ServiceComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
