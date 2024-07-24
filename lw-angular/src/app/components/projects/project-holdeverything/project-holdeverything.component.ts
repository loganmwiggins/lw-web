import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ScrollService } from '../../../services/scroll.service';

@Component({
    selector: 'app-project-holdeverything',
    standalone: true,
    imports: [ RouterModule ],
    templateUrl: './project-holdeverything.component.html',
    styleUrl: './project-holdeverything.component.css'
})
export class ProjectHoldeverythingComponent {
    constructor(private scrollService: ScrollService) {}

    ngOnInit() {
        this.scrollService.enableScrollAnimation();   // Info card scroll animation
    }

    openHEsite() { window.open("https://www.holdeverythingfl.com", "_blank"); }
}