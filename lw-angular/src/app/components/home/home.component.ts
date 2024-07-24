import { Component } from '@angular/core';

import { ScrollService } from '../../services/scroll.service';
import { SettingsService } from '../../services/settings.service';
import { AlertService } from '../../services/alert.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})

export class HomeComponent {
    constructor(
        private scrollService: ScrollService,
        private settingsService: SettingsService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        if (window.location.href == "https://loganwiggins.com" || window.location.href == "https://loganwiggins.com/") {
            window.open("https://www.loganwiggins.com", "_self");
        }

        this.scrollService.enableScrollAnimation();   // Enable scroll animations

        this.settingsService.togglePageIconColors();
    }

    // Contact button functions
    showAlert() { document.querySelector(".copy-message")?.classList.add("active"); }
    hideAlert() { document.querySelector(".copy-message")?.classList.remove("active"); }

    copyEmail() {
        navigator.clipboard.writeText("loganmwiggins1@gmail.com");
        this.alertService.showAlert();
        setTimeout(this.alertService.hideAlert, 3000);
        // this.showAlert();
        // setTimeout(this.hideAlert, 3000);
    }
    openLinkedin() { window.open("https://www.linkedin.com/in/loganwiggins/"); }
    openGitHub() { window.open("https://github.com/loganmwiggins"); }
    openYouTube() { window.open("https://www.youtube.com/@LoganWiggins1"); }
}