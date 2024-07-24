import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ScrollService } from '../../../services/scroll.service';

@Component({
    selector: 'app-project-induserv',
    standalone: true,
    imports: [ RouterModule ],
    templateUrl: './project-induserv.component.html',
    styleUrl: './project-induserv.component.css'
})
export class ProjectInduservComponent {
    constructor(private scrollService: ScrollService) {}

    ngOnInit() {
        this.scrollService.enableScrollAnimation();   // Info card scroll animation
    }

    openISOsite() { window.open("https://www.induserv.online", "_blank"); }
}