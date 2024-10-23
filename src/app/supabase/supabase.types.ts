/**
 * Supabase types
 */

/**
 * Navbar item
 */
export interface NavbarItem {
    id: number;
    name: string;
    isDisplayed: boolean;
    url: string;
    order: number;
}