import { Injectable, NgZone, inject } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js'
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
   private supabase : SupabaseClient;
   private readonly ngZone = inject(NgZone);

  constructor() { 
    const supabaseUrl = import.meta.env['NG_APP_SUPABASE_URL'];
    const supabaseKey = import.meta.env['NG_APP_SUPABASE_KEY'];

    this.supabase = this.ngZone.runOutsideAngular(() =>
      createClient(supabaseUrl, supabaseKey)
    );
  }
}
