import { Component, HostListener } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Email } from '../../types/email.type';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name: string = '';
  to: string = '';
  subject: string = '';
  body: string = '';
  isModalVisible = false;
  modalMessage = '';
  modalTitle = '';
  correctIcon = true;
  
  constructor(private contactService: ContactService) {}

  onSubmit(form: NgForm) {
    const emailData: Email = {
      name: this.name,
      to: this.to,
      subject: this.subject,
      body: this.body
    };

    if(form.valid){
      this.contactService.sendEmail(emailData).subscribe({
        next: (response) => {
          this.modalTitle = 'Thank You for Contacting me!';
          this.modalMessage = "Your message has been successfully sent. A confirmation email has been sent to you. Please check your inbox, and if you don't find it, be sure to check your spam folder.";
          this.correctIcon = true;
          this.openModal();
        },
        error: (err) => {
          this.modalTitle = 'Message Sending Failed';
          this.modalMessage = 'Unfortunately, there was an issue while sending your message. Please try again later.';
          this.correctIcon = false;
          this.openModal();
        }
      });
      form.resetForm();
    }
  }

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    console.log('close modal');
    this.isModalVisible = false;
  }

  /**
   * Close modal when the escape key is pressed
   * @param event KeyboardEvent
   */
  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent) {
    if (this.isModalVisible) {
      this.closeModal();
    }
  }

  /**
   * Close modal when the background is clicked
   * @param event MouseEvent
   */
  handleBackgroundClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.id === 'hs-slide-up-animation-modal') {
      this.closeModal();
    }
  }
}
