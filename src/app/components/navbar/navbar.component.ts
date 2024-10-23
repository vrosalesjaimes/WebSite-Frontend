import { Component } from '@angular/core';
import { SupabaseService } from '../../supabase/supabase.service';
import { NavbarItem } from '../../supabase/supabase.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public navbarItems: NavbarItem[] = [];

  constructor(private supabaseService: SupabaseService) {
    this.getNavbarItems().then((navbarItems) => {
      this.navbarItems = navbarItems;
    });
   }

  /**
   * Get navbar items
   * @returns Navbar items
   */
  async getNavbarItems(): Promise<NavbarItem[]> {
    const navbarItems = await this.supabaseService.getNavbarItems();
    return navbarItems;
  }
}
