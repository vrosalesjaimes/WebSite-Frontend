import { Component } from '@angular/core';
import { Skill } from '../../../supabase/supabase.types';
import { SupabaseService } from '../../../supabase/supabase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public skills: Skill[] = [];

  constructor(private supabaseService:SupabaseService) {
    this.getSkills().then((skills) => {
      this.skills = skills;
    });
  }

  /**
   * Get skills
   * @returns Skills
   */
  async getSkills(): Promise<Skill[]> {
    const skills = await this.supabaseService.getSkills();
    return skills;
  }
}
