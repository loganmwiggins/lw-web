import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AlertService {
    showAlert() { document.querySelector(".copy-message")?.classList.add("active"); }
    hideAlert() { document.querySelector(".copy-message")?.classList.remove("active"); }
}