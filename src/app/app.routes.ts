import { Routes } from '@angular/router';
import { About } from './page/about/about';
import { Contact } from './page/contact/contact';
import { Home } from './page/home/home';
import { Profile } from './page/profile/profile';
import { CustomerForm } from './page/customer-form/customer-form';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "home",
        component: Home
    },
    {
        path: "about",
        component: About
    },
    {
        path: "contact",
        component: Contact
    },
    {
        path: "profile",
        component: Profile
    },
    {
        path: "customer-form",
        component: CustomerForm
    }
];
