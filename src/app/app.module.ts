import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './MyComponent/home-component/home-component.component';
import { ServiceComponentComponent } from './MyComponent/service-component/service-component.component';
import { PortfolioComponentComponent } from './MyComponent/portfolio-component/portfolio-component.component';
import { AboutComponentComponent } from './MyComponent/about-component/about-component.component';
import { ContactUsComponentComponent } from './MyComponent/contact-us-component/contact-us-component.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkService } from './work.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ServiceComponentComponent,
    PortfolioComponentComponent,
    AboutComponentComponent,
    ContactUsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [WorkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
