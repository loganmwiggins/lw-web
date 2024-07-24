import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class NavService {
    rememberNavStatus(): void {
        if (localStorage.getItem("navStatus") == null) {
            this.expandNav();
            if (window.innerWidth <= 1200 && window.innerWidth > 800) { this.collapseNav(); }
        }
        else if (localStorage.getItem("navStatus") == "expanded") {
            this.expandNav();
            if (window.innerWidth <= 1200 && window.innerWidth > 800) { this.collapseNav(); }
        }
        else if (localStorage.getItem("navStatus") == "collapsed") {
            this.collapseNav();
            if (window.innerWidth <= 800) { this.expandNav(); }
        }
        else {
            this.expandNav();
            if (window.innerWidth <= 1200 && window.innerWidth > 800) { this.collapseNav(); }
        }
    }
    
    collapseNav(): void {
        document.getElementById("navigation")?.classList.add("collapsed");
        document.querySelector(".nav-ctnr")?.classList.add("collapsed");
        localStorage.setItem("navStatus", "collapsed");
    }
    
    expandNav(): void {
        document.getElementById("navigation")?.classList.remove("collapsed");
        document.querySelector(".nav-ctnr")?.classList.remove("collapsed");
        localStorage.setItem("navStatus", "expanded");
    }

    toggleNavCollapse(): void {
        if (localStorage.getItem("navStatus") == "expanded") {
            this.collapseNav();
        }
        else if (localStorage.getItem("navStatus") == "collapsed") {
            this.expandNav();
        }
    }
}