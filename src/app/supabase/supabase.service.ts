import { inject, Injectable, NgZone } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { env } from 'process';
import { Education, NavbarItem, Skill, WorkExperience } from './supabase.types';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;
  private readonly ngZone = inject(NgZone);

  constructor() {
    const supabaseUrl = import.meta.env['NG_APP_SUPABASE_URL'];
    const supabaseKey = import.meta.env['NG_APP_SUPABASE_KEY'];

    this.supabase = this.ngZone.runOutsideAngular(() => createClient(supabaseUrl, supabaseKey));
  }

  /**
   * Get navbar items
   * @returns Navbar items
   */

  async getNavbarItems(): Promise<NavbarItem[]> {
    const { data, error } = await this.supabase.
      from('navbar')
      .select('*')
      .eq('isDisplayed', true)
      .order('order', { ascending: true });

    if (error) {
      throw error;
    }

    return data;
  }

  /**
   * Get skills
   * @returns Skills
   * @throws Error
   */
  async getSkills(): Promise<Skill[]> {
    const { data, error } = await this.supabase
      .from('skill')
      .select('*');

    if (error) {
      throw error;
    }

    return data;
  }

  /**
   * Get work experience
   * @returns Work experience
   * @throws Error
   */
  async getWorkExperience(): Promise<WorkExperience[]> {
    const { data, error } = await this.supabase
      .from('experience')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      throw error;
    }

    return data;
  }

  /**
   * Get education
   * @returns Education
   * @throws Error
   */
  async getEducation(): Promise<Education[]> {
    const { data, error } = await this.supabase
      .from('education')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      throw error;
    }

    return data;
  }
}