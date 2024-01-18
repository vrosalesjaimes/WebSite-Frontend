import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js'
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
   private supabase : SupabaseClient;

  constructor() { 
    const supabaseUrl = env['SUPABASE_URL'] == undefined ? '' : env['SUPABASE_URL'];
    const supabaseKey = env['SUPABASE_KEY'] == undefined ? '' : env['SUPABASE_KEY'];
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }
}
