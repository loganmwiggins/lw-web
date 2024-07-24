import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ScrollService {
    enableScrollAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) { entry.target.classList.add('scroll-show'); }
                else { entry.target.classList.remove('scroll-show'); }
            });
        });

        const hiddenElements = document.querySelectorAll('.scroll-hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    }
}