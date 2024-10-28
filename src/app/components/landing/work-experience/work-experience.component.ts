import { Component } from '@angular/core';
import { WorkExperience } from '../../../supabase/supabase.types';
import { SupabaseService } from '../../../supabase/supabase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  public experiences: WorkExperience[] = [];

  constructor(private supabaseService: SupabaseService){
    this.getWorkExperience().then((experience) => {
      this.experiences = experience;
    });
  }

  /**
   * Get work experience
   * @returns Work experience
   */
  async getWorkExperience(): Promise<WorkExperience[]> {
    const experience = await this.supabaseService.getWorkExperience();
    return experience;
  }
}
