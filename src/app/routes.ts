import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const routerConfig:Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Home page"
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: "Details page"
    }
];

export default routerConfig;