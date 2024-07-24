import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { NavigationComponent } from "./components/navigation/navigation.component";
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';

import { SettingsService } from './services/settings.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        NavigationComponent,
        HomeComponent,
        SettingsComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent {
    isSettingsOpen: boolean = false;

    constructor(private settingsService: SettingsService) {}

    ngOnInit(): void {
        this.settingsService.rememberSettings();
    }

    handleToggleSettingsMenu(): void {
        this.isSettingsOpen = !this.isSettingsOpen;
    }
}