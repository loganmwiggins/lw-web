import { Routes } from "@angular/router";

import { HomeComponent } from "./app/components/home/home.component";
import { ResumeComponent } from "./app/components/resume/resume.component";
import { ProjectsComponent } from "./app/components/projects/projects.component";
import { ProjectLoganwigginsComponent } from "./app/components/projects/project-loganwiggins/project-loganwiggins.component";
import { ProjectIntconvertComponent } from "./app/components/projects/project-intconvert/project-intconvert.component";
import { ProjectHoldeverythingComponent } from "./app/components/projects/project-holdeverything/project-holdeverything.component";
import { ProjectInduservComponent } from "./app/components/projects/project-induserv/project-induserv.component";

const routeConfig: Routes = [
    // Nav routes
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Logan Wiggins',
    },
    {
        path: 'resume',
        component: ResumeComponent,
        title: 'Logan Wiggins | Resume',
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Logan Wiggins | Projects',
    },

    // Project routes
    {
        path: 'projects/loganwiggins',
        component: ProjectLoganwigginsComponent,
        title: 'Logan Wiggins | Projects',
    },
    {
        path: 'projects/intconvert',
        component: ProjectIntconvertComponent,
        title: 'Logan Wiggins | Projects',
    },
    {
        path: 'projects/holdeverything',
        component: ProjectHoldeverythingComponent,
        title: 'Logan Wiggins | Projects',
    },
    {
        path: 'projects/induserv',
        component: ProjectInduservComponent,
        title: 'Logan Wiggins | Projects',
    },

    // Optional: Redirect any unknown paths to the home page
    { 
        path: '**', 
        redirectTo: '/home'
    } 
];

export default routeConfig;