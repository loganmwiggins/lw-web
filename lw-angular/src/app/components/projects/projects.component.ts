import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ScrollService } from '../../services/scroll.service';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [ RouterModule ],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})

export class ProjectsComponent {
    constructor(private scrollService: ScrollService) {}

    ngOnInit() {
        sessionStorage.setItem("location", "projects");
        this.scrollService.enableScrollAnimation();   // Info card scroll animation
    }
}