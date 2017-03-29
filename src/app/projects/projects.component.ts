import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {

  constructor(private router: Router) { }

  redirect(pagename) {
    
    console.log(pagename);
    this.router.navigate(['/'+pagename]);
  }
  ngAfterViewInit() {
    setTimeout(() => {
        console.log('View is fully loaded');
    }, 0);
  }
  
}
