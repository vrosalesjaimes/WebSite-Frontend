import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { WorkExperienceComponent } from "../work-experience/work-experience.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, WorkExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
