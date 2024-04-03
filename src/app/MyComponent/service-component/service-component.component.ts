import { Component } from '@angular/core';
import { WorkService } from '../../work.service';

interface ClientDetails {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Component({
  selector: 'app-service-component',
  template: `<h2>Provided Services</h2>
<div *ngFor="let client of clientDetails  ">

<p>ID: {{ client.id }}</p>
  <p>Name: {{ client.name }}</p>
  <p>Username: {{ client.username }}</p>
  <p>Email: {{ client.email }}</p>
  <p>Address:</p>
  <ul>
    <li>Street: {{ client.address.street }}</li>
    <li>Suite: {{ client.address.suite }}</li>
    <li>City: {{ client.address.city }}</li>
    <li>Zipcode: {{ client.address.zipcode }}</li>
    <li>Latitude: {{ client.address.geo.lat }}</li>
    <li>Longitude: {{ client.address.geo.lng }}</li>
  </ul>
  <p>Phone: {{ client.phone }}</p>
  <p>Website: {{ client.website }}</p>
  <p>Company:</p>
  <ul>
    <li>Name: {{ client.company.name }}</li>
    <li>Catch Phrase: {{ client.company.catchPhrase }}</li>
    <li>BS: {{ client.company.bs }}</li>
  </ul>
  <hr>

</div>
  `,
  styleUrl: './service-component.component.css'
})
export class ServiceComponentComponent {

    public clientDetails : ClientDetails[]=[];
  
constructor(private Service   : WorkService ){

}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.clientDetails=this.Service.getData()
}





}
