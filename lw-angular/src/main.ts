import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import routeConfig from './routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routeConfig)
    ]
}).catch((err) => console.error(err));