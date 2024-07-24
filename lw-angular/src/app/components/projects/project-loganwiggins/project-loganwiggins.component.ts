import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ScrollService } from '../../../services/scroll.service';

@Component({
    selector: 'app-project-loganwiggins',
    standalone: true,
    imports: [ RouterModule ],
    templateUrl: './project-loganwiggins.component.html',
    styleUrl: './project-loganwiggins.component.css'
})
export class ProjectLoganwigginsComponent {
    constructor(private scrollService: ScrollService) {}

    ngOnInit() {
        this.scrollService.enableScrollAnimation();   // Info card scroll animation
    }

    openLWsite() { window.open("https://www.loganwiggins.com", "_blank"); }
}