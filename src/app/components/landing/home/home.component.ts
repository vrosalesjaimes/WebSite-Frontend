import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { WorkExperienceComponent } from "../work-experience/work-experience.component";
import { EducationComponent } from "../education/education.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, WorkExperienceComponent, EducationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
