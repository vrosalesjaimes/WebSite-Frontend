import { Component } from '@angular/core';
import { Education } from '../../../supabase/supabase.types';
import { SupabaseService } from '../../../supabase/supabase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  public educations: Education[] = [];

  constructor(private supabaseService: SupabaseService){
    this.getEducation().then((education) => {
      this.educations = education;
    });
  }

  /**
   * Get education
   * @returns Education
   */
  async getEducation(): Promise<Education[]> {
    const education = await this.supabaseService.getEducation();
    return education;
  }
}
