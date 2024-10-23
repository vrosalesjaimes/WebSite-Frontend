import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'something-missing', component: PageNotFoundComponent },  
    {path: 'projects', component: ProjectsComponent },
    {path: 'certifications', component: CertificationsComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', redirectTo: '/something-missing' }
];
