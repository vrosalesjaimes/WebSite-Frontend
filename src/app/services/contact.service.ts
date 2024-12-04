import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Email } from "../types/email.type";

@Injectable({
    providedIn: 'root'
})

export class ContactService {
    private emailApiUrl = import.meta.env['NG_APP_EMAIL_API_URL'];

    constructor(private http: HttpClient) {}

    /**
     * Send email
     * @param emailData 
     * @returns 
     */
    sendEmail(email: Email): Observable<any> {
        return this.http.post(this.emailApiUrl, email);
    }
}