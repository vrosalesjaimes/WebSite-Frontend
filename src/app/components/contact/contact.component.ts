import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Email } from '../../types/email.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name: string = '';
  to: string = '';
  subject: string = '';
  body: string = '';
  
  constructor(private contactService: ContactService) {}

  onSubmit() {
    const emailData: Email = {
      name: this.name,
      to: this.to,
      subject: this.subject,
      body: this.body
    };
    this.contactService.sendEmail(emailData).subscribe({
      next: (response) => {
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
