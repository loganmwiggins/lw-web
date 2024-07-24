import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ScrollService } from '../../../services/scroll.service';

@Component({
    selector: 'app-project-intconvert',
    standalone: true,
    imports: [ RouterModule ],
    templateUrl: './project-intconvert.component.html',
    styleUrl: './project-intconvert.component.css'
})
export class ProjectIntconvertComponent {
    constructor(private scrollService: ScrollService) {}

    ngOnInit() {
        this.scrollService.enableScrollAnimation();   // Info card scroll animation
    }

    openICsite() { window.open("https://www.wigginsnet.com/int-convert", "_blank"); }
    openICGitHub() { window.open("https://github.com/loganmwiggins/int-convert", "_blank"); }
    openICYouTube() { window.open("https://www.youtube.com/watch?v=mXop9WOdQak&ab_channel=LoganWiggins", "_blank"); }
}