import { Component } from '@angular/core';
import { SupabaseService } from '../../../supabase/supabase.service';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  public logo: SVGElement | any;

  constructor(private supabaseService: SupabaseService) {
    this.getLogo().then((logo) => {
      this.logo = logo;
    });
  }

  async getLogo() : Promise<String>{ 
    const logo = await this.supabaseService.getLogo();
    return logo.logo;
  }


  


}
