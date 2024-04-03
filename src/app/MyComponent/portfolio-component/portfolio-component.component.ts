import { Component, HostListener } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-portfolio-component',
  templateUrl: './portfolio-component.component.html',
  styleUrls: ['./portfolio-component.component.css']
})
export class PortfolioComponentComponent {

  imageUrl: string = 'assets/yash.jpg';
  imageUrl1: string = 'assets/bg.png';

  constructor() { }

  ngOnInit(): void {
    this.setupTyped();
  }

  setupTyped(): void {
    const typed = new Typed('#element', {
      strings: ['Full Stack Developer', 'Code Enthusiast', 'Video Editor', 'Content Creator', 'Development Ninja', 'Full Stack Developer'],
      typeSpeed: 70,
    });
  }

  @HostListener('window:beforeunload', ['$event'])
onBeforeUnload(event: any) {
  console.log('Beforeunload event triggered');
  return event.returnValue = 'Are you sure you want to leave this site?';
}


  goToGitHubProfile(): void {
    window.open('https://github.com/Shindeyashtech', '_blank');
  }
}
