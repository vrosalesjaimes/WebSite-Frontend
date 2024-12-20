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

export interface Skill {
    id: number;
    name: string;
}

export interface WorkExperience {
    id:number;
    title:string;
    company:string;
    date:string;
    description:string[];
    description_card:string;
    img:string;
    url:string;
}

export interface Education {
    id:number;
    title:string;
    school:string;
    date:string;
    description:string[];
    description_card:string;
    img:string;
    url:string;
}