import { Routes } from '@angular/router';
import { About } from './page/about/about';
import { Contact } from './page/contact/contact';
import { Home } from './page/home/home';
import { Profile } from './page/profile/profile';

export const routes: Routes = [
    {
        path:"about",
        component:About
    },
    {
        path:"Contact",
        component:Contact
    },
    {
        path:"Home",
        component:Home
    },
    {
        path:"profile",
        component:Profile
    }
];
