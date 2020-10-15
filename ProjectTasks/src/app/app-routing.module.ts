import {NgModule, Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
    {
path: '',

component : HomeComponent
    },
{
    path: 'projects',

    component : ProjectsComponent
},
{
    path: '**',

    component : PagenotfoundComponent
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }