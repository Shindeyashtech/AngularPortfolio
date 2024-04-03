import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us-component',
  templateUrl: './contact-us-component.component.html',
  styleUrls: ['./contact-us-component.component.css']
})
export class ContactUsComponentComponent {
  constructor(private fb: FormBuilder) {}

  contact = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
  });

  onSubmit() {
     
      console.log('Form is valid');
      console.log('first_name', this.contact.value.first_name);
      console.log('last_name', this.contact.value.last_name);
      console.log('email', this.contact.value.email);
      console.log('phone', this.contact.value.phone);
      // Here you can add your logic to submit the form data
    
  }
}
