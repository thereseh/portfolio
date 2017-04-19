import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule } from '@angular/router';
import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';
import { AboutComponent } from './about/about.component';
import { Project3Component } from './project3/project3.component';
import { Project4Component } from './project4/project4.component';
import { Project5Component } from './project5/project5.component';
import { Project6Component } from './project6/project6.component';
import { ContactComponent } from './contact/contact.component';
import { Project7Component } from './project7/project7.component';
import { Project8Component } from './project8/project8.component';
import { Project9Component } from './project9/project9.component';
import { Project10Component } from './project10/project10.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    Project1Component,
    Project2Component,
    AboutComponent,
    Project3Component,
    Project4Component,
    Project5Component,
    Project6Component,
    ContactComponent,
    Project7Component,
    Project8Component,
    Project9Component,
    Project10Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'project1', component: Project1Component },
      { path: 'project2', component: Project2Component },
      { path: 'project3', component: Project3Component },
      { path: 'project4', component: Project4Component },
      { path: 'project5', component: Project5Component },
      { path: 'project6', component: Project6Component },
      { path: 'project7', component: Project7Component },
      { path: 'project8', component: Project8Component },
      { path: 'project9', component: Project9Component },
      { path: 'project10', component: Project10Component },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
