import { Component } from '@angular/core';
import { WorkService } from '../../work.service';
 import { Employee } from '../../employee.model';
@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrl: './about-component.component.css'
})
export class AboutComponentComponent {

  public employee: Employee[] = [];

constructor(private work : WorkService){}



ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.work.getEmployee().subscribe({
    next : (data : Employee[])=>{
      this.employee=data;
    },
  });

}

}
