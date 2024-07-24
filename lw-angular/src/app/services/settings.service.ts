import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SettingsService {
    getColorStatus(): string | null {
        return localStorage.getItem("siteColor");
    }

    getThemeStatus(): string | null {
        return localStorage.getItem("siteTheme");
    }

    rememberSettings(): void {
        // Color mode (default)
        if (localStorage.getItem("siteColor") == null) {
            localStorage.setItem("siteColor", "light");
        }

        // Theme (default)
        if (localStorage.getItem("siteTheme") == null
            || (localStorage.getItem("siteTheme") != "glass" && localStorage.getItem("siteTheme") != "minimal"))
        {
            localStorage.setItem("siteTheme", "glass");
        }

        // Check siteColor and siteTheme state on load (keeps on refresh)
        if (localStorage.getItem("siteColor") == "dark") { this.enableDarkMode(); }
        else { this.disableDarkMode(); }
    }

    enableDarkMode() {
        // Add/remove color set depending on site theme
        if (localStorage.getItem("siteTheme") == "glass") {
            document.body.classList.remove("minimal-light");
            document.body.classList.remove("minimal-dark");
            document.body.classList.add("root-dark");
            // bgVideo.style.display = "block";
        }
        else {
            document.body.classList.remove("minimal-light");
            document.body.classList.remove("root-dark");
            document.body.classList.add("minimal-dark");
            // bgVideo.style.display = "none";
        }

        if (localStorage.getItem("siteColor") != "dark")
            localStorage.setItem("siteColor", "dark");

        // Set nav icons to white
        document.getElementById("homeIcon")?.classList.add('filter-white');
        document.getElementById("resumeIcon")?.classList.add('filter-white');
        document.getElementById("projectsIcon")?.classList.add('filter-white');
        document.getElementById("settingsIcon")?.classList.add('filter-white');
        document.getElementById("collapseIcon")?.classList.add('filter-white');
        // document.getElementById("themeIcon").src = "assets/icons/nav-icons/moon.svg";

        this.togglePageIconColors();
    }

    disableDarkMode() {
        if (localStorage.getItem("siteTheme") == "glass") {
            document.body.classList.remove("root-dark");
            document.body.classList.remove("minimal-dark");
            document.body.classList.remove("minimal-light");
            // bgVideo.style.display = "block";
        }
        else {
            document.body.classList.remove("root-dark");
            document.body.classList.remove("minimal-dark");
            document.body.classList.add("minimal-light");
            // bgVideo.style.display = "none";
        }

        if (localStorage.getItem("siteColor") != "light")
            localStorage.setItem("siteColor", "light");

        // Set nav icons to black
        document.getElementById("homeIcon")?.classList.remove('filter-white');
        document.getElementById("resumeIcon")?.classList.remove('filter-white');
        document.getElementById("projectsIcon")?.classList.remove('filter-white');
        document.getElementById("settingsIcon")?.classList.remove('filter-white');
        document.getElementById("collapseIcon")?.classList.remove('filter-white');
        // themeIcon.src = "assets/icons/nav-icons/sun.svg";
        document.getElementById("themeIcon")?.classList.remove('filter-white');
        document.getElementById("brushIcon")?.classList.remove('filter-white');

        this.togglePageIconColors(); 
    }

    togglePageIconColors(): void {
        if (localStorage.getItem("siteColor") == "dark") {
            // Set home icons to white
            document.getElementById("emailIcon")?.classList.add('filter-white');
            document.getElementById("linkedinIcon")?.classList.add('filter-white');
            document.getElementById("githubIcon")?.classList.add('filter-white');
            document.getElementById("youtubeIcon")?.classList.add('filter-white');
            // Set settings icons to white
            document.getElementById("themeIcon")?.classList.add('filter-white');
            document.getElementById("brushIcon")?.classList.add('filter-white');
        }
        else if (localStorage.getItem("siteColor") == "light") {
            // Set home icons to black
            document.getElementById("emailIcon")?.classList.remove('filter-white');
            document.getElementById("linkedinIcon")?.classList.remove('filter-white');
            document.getElementById("githubIcon")?.classList.remove('filter-white');
            document.getElementById("youtubeIcon")?.classList.remove('filter-white');
            // Set settings icons to black
            document.getElementById("themeIcon")?.classList.remove('filter-white');
            document.getElementById("brushIcon")?.classList.remove('filter-white');
        }
        else {  // Safe default in case someone manually alters local storage
            // Set home icons to black
            document.getElementById("emailIcon")?.classList.remove('filter-white');
            document.getElementById("linkedinIcon")?.classList.remove('filter-white');
            document.getElementById("githubIcon")?.classList.remove('filter-white');
            document.getElementById("youtubeIcon")?.classList.remove('filter-white');
            // Set settings icons to black
            document.getElementById("themeIcon")?.classList.remove('filter-white');
            document.getElementById("brushIcon")?.classList.remove('filter-white');
        }
    }

    toggleSiteColor(): void {
        if (localStorage.getItem("siteColor") == "light") { this.enableDarkMode(); }
        else { this.disableDarkMode(); }
    }

    changeTheme(selectedVal: string): void {
        localStorage.setItem("siteTheme", selectedVal);

        if (localStorage.getItem("siteColor") == "dark") { this.enableDarkMode(); }
        else { this.disableDarkMode(); }
    }
}