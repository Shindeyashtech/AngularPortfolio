import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './MyComponent/home-component/home-component.component';
import { ServiceComponentComponent } from './MyComponent/service-component/service-component.component';
import { PortfolioComponentComponent } from './MyComponent/portfolio-component/portfolio-component.component';
import { AboutComponentComponent } from './MyComponent/about-component/about-component.component';
import { ContactUsComponentComponent } from './MyComponent/contact-us-component/contact-us-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-component', pathMatch: 'full' },
  { path: 'home-component', component: HomeComponentComponent },
  {path:'service-component' , component:ServiceComponentComponent },
  {path:'portfolio-component', component: PortfolioComponentComponent },
  {path : 'about-component' , component : AboutComponentComponent },
  {path : 'contact-us-component' , component : ContactUsComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
