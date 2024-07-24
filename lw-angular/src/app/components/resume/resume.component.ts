import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollService } from '../../services/scroll.service';

@Component({
    selector: 'app-resume',
    standalone: true,
    imports: [ CommonModule ],
    templateUrl: './resume.component.html',
    styleUrl: './resume.component.css'
})

export class ResumeComponent {

    // Resume card booleans
    cardJmfOpened: boolean = false;
    cardPcgOpened: boolean = false;
    cardCotOpened: boolean = false;
    card223Opened: boolean = false;
    cardStOpened: boolean = false;
    cardPubOpened: boolean = false;
    cardFsuOpened: boolean = false;
    cardAitpOpened: boolean = false;
    cardStarsOpened: boolean = false;

    constructor(private scrollService: ScrollService) {}

    ngOnInit() {
        sessionStorage.setItem("location", "resume");

        this.scrollService.enableScrollAnimation();   // Info card scroll animation

        // if (window.location.href == "https://loganwiggins.com/resume?" || window.location.href == "https://loganwiggins.com/resume?/") {
        //     window.open("https://www.loganwiggins.com/resume?", "_self");
        // }
    }

    openResumePdf() { window.open("assets/LoganWiggins_Resume.pdf", "_blank"); }

    toggleResumeCard(card: string) {
        switch(card) {
            case 'jmf': {
                this.cardJmfOpened = !this.cardJmfOpened;
                break;
            }
            case 'pcg': {
                this.cardPcgOpened = !this.cardPcgOpened;
                break;
            }
            case 'cot': {
                this.cardCotOpened = !this.cardCotOpened;
                break;
            }
            case '223': {
                this.card223Opened = !this.card223Opened;
                break;
            }
            case 'st': {
                this.cardStOpened = !this.cardStOpened;
                break;
            }
            case 'pub': {
                this.cardPubOpened = !this.cardPubOpened;
                break;
            }
            case 'fsu': {
                this.cardFsuOpened = !this.cardFsuOpened;
                break;
            }
            case 'aitp': {
                this.cardAitpOpened = !this.cardAitpOpened;
                break;
            }
            case 'stars': {
                this.cardStarsOpened = !this.cardStarsOpened;
                break;
            }
        }
    }
}