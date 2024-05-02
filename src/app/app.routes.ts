import { Routes } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'mainView', component: MainViewComponent }
];
