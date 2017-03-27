import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Therese Henriksson';
  constructor(private router: Router) { }

  redirect(pagename) {
    
    console.log(pagename);
    this.router.navigate(['/'+pagename]);
  }
}
