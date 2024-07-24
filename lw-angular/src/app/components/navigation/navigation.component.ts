import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

import { NavService } from '../../services/nav.service';

@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [ RouterModule ],
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    @Output() toggleSettingsMenuEvent = new EventEmitter<void>();
    @Input() isSettingsOpen: boolean = false;

    currentUrl: string = '';

    constructor(private navService: NavService, private router: Router) {}

    ngOnInit(): void {
        this.navService.rememberNavStatus();

        // Active link
        this.router.events
            .pipe(filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => {
                this.currentUrl = event.urlAfterRedirects;
            });
    }

    // Active link
    isRouteActive(route: string): boolean {
        return this.currentUrl === route || this.currentUrl.startsWith(route + '/');
    }
    getImageSrc(route: string, defaultSrc: string, activeSrc: string): string {
        return this.isRouteActive(route) ? activeSrc : defaultSrc;
    }

    // Settings menu
    toggleSettingsMenu() {
        this.toggleSettingsMenuEvent.emit();
    }

    // Nav collapse
    toggleNavCollapse() {
        this.navService.toggleNavCollapse();
    }
}
