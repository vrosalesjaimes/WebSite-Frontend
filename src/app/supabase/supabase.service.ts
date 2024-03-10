import { Injectable, NgZone, inject } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js'
import { env } from 'process';
import { Logo } from './supabase.types';

/**
 * Supabase service
 */
@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
   private supabase : SupabaseClient;
   private readonly ngZone = inject(NgZone);

   /**
    * Creates an instance of SupabaseService.
    */
  constructor() { 
    const supabaseUrl = import.meta.env['NG_APP_SUPABASE_URL'];
    const supabaseKey = import.meta.env['NG_APP_SUPABASE_KEY'];

    this.supabase = this.ngZone.runOutsideAngular(() =>
      createClient(supabaseUrl, supabaseKey)
    );
  }

  /**
   * Get the logo from the database
   * @returns {Promise<Logo>} The logo object
   */
  async getLogo() : Promise<Logo>{
    const { data, error } = await this.supabase
      .from('logo')
      .select('*')
      .single();

    if (error) {
      throw error;
    }

    return data;

  }
}
