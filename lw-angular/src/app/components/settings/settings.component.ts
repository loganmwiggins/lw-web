import { Component, Output, EventEmitter } from '@angular/core';

import { SettingsService } from '../../services/settings.service';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [],
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.css'
})
export class SettingsComponent {
    @Output() toggleSettingsMenuEvent = new EventEmitter<void>();

    siteColor: string | null;
    siteTheme: string | null;

    constructor(private settingsService: SettingsService) {
        this.siteColor = settingsService.getColorStatus();
        this.siteTheme = settingsService.getThemeStatus();
    }

    ngOnInit(): void {
        this.settingsService.togglePageIconColors();
    }

    onToggleSettings(): void {
        this.toggleSettingsMenuEvent.emit();
    }

    onChangeColor(): void {
        this.settingsService.toggleSiteColor();
        this.siteColor = this.settingsService.getColorStatus();
    }

    onChangeTheme(event: Event): void {
        const selectElement = event.target as HTMLSelectElement;
        const selectedTheme = selectElement.value;

        this.settingsService.changeTheme(selectedTheme);
        this.siteTheme = this.settingsService.getThemeStatus();
    }
}
